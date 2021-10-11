const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../model/auth');
const MyList = require('../model/mylist');


require('dotenv').config();

//@route /api/user/register
//@request POST
//@access public
router.post('/register', [
  check('name', 'please enter name').not().isEmpty(),
  check('email', 'please enter valid email').isEmail(),
  check('password', 'password can not be empty or less then 6 characters').isLength({ mix: 6 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
  {
    return res.status(400).send({ err: errors.array() });
  }
  try
  {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user)
    {
      return res.status(400).send('User alredy exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      password: hashedPass
    })

    const payload = {
      user: {
        id: user._id,
      }
    }

    await user.save();
    const token = jwt.sign(payload, process.env.USER_KEY, { expiresIn: '8h' })

    return res.status(200).send({ name, token })
  } catch (err)
  {
    console.log(err);
    return res.status(500).json('Server Error');
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
      return res.status(400).send("User doesn't exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
    {
      return res.status(400).send('Invalid credentials');
    }
    const payload = {
      user: {
        id: user._id,
      }
    }
    const token = jwt.sign(payload, process.env.USER_KEY, { expiresIn: '8h' })
    return res.status(200).send({ name: user.name, token })
  } catch (err)
  {
    console.log('Server error', err)
    return res.status(500).send('sever error')
  }
});

//@route /api/user/check
//@request POST
//@access private
router.get('/check', auth, (req, res) => {
  try
  {
    return res.status(200).send('token valid')
  } catch (err)
  {
    return res.status(500).json('server error');
  }
});


//@route /api/user/mylist/add
//@request POST
//@access private
router.post('/mylist/add', auth, async (req, res) => {
  try
  {
    const item_id = req.body.id;
    const user_id = req.user.id;

    let myList = await MyList.findOne({ "user": user_id, "item_id": item_id });
    if (myList)
    {
      return res.status(400).json('item already exists');
    }
    myList = new MyList({
      user: user_id,
      item_id: item_id,
    });

    await myList.save();
    return res.status(200).json(myList);
  } catch (err)
  {
    console.log(err)
    return res.status(500).json('server error');
  }

});

//@route /api/user/mylist/get
//@request GET
//@access private
router.get('/mylist/get', auth, async (req, res) => {
  try
  {
    const user_id = req.user.id;

    let myList = await MyList.find({ "user": user_id });
    if (!myList)
    {
      return res.status(400).json('list empty');
    }
    const id = [];
    myList.map((item) => id.push(parseInt(item.item_id)))

    return res.status(200).json(id);
  } catch (err)
  {
    return res.status(500).json('server error');
  }

})

//@route /api/user/mylist/remove
//@request DELETE
//@access private
router.delete('/mylist/remove/:id', auth, async (req, res) => {
  try
  {
    const { id } = req.params;
    const user_id = req.user.id;
    const item_id = id;

    console.log("---------")
    console.log(id)

    let myList = await MyList.findOne({ user_id: user_id });
    if (!myList)
    {
      return res.status(404).json('list empty');
    }
    myList = await MyList.findOneAndDelete({ "user": user_id, "item_id": item_id });
    if (!myList)
    {
      return res.status(404).json('item not found');
    }
    return res.status(200).json("Item Removed successfully");
  } catch (err)
  {
    console.log(err);
    return res.status(500).json('server error');
  }

})

module.exports = router;