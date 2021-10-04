const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../model/auth')
require('dotenv').config();

//@route /api/user/register
//@request POST
//@access public
router.post('/register', [
  check('name', 'please enter name').not().isEmpty(),
  check('email', 'please enter valid email').isEmail(),
  check('password', 'password can not be empty or less then 6 characters').isLength({ mix: 6 }),
  check('desc', 'write something about yourself').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
  {
    return res.status(400).send({ err: errors.array() });
  }
  try
  {
    const { name, email, password, desc } = req.body;
    let user = await User.findOne({ email: email });
    if (user)
    {
      return res.status(200).send('User alredy exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      desc,
      password: hashedPass
    })

    const payload = {
      user: {
        id: user._id,
      }
    }

    await user.save();
    const token = jwt.sign(payload, process.env.USER_KEY)

    return res.status(200).send({ name, token })
  } catch (err)
  {
    console.log('Server error', err)
  }
});


//@route /api/user/login
//@request POST
//@access public
router.post('/login', [
  check('email', 'please enter valid email').isEmail(),
  check('password', 'password can not be empty or less then 6 characters').isLength({ mix: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
  {
    return res.status(400).send({ err: errors.array() });
  }
  try
  {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user)
    {
      return res.status(200).send('Invalid credentials')
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
    {
      return res.status(200).send('Invalid credentials');
    }
    const payload = {
      user: {
        id: user._id,
      }
    }
    const token = jwt.sign(payload, process.env.USER_KEY, { expiresIn: '1h' })
    return res.status(200).send({ name: user.name, token })
  } catch (err)
  {
    console.log('Server error', err)
  }
});
module.exports = router;