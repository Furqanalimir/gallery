const express = require('express');
const router = express.Router();
const auth = requier('../model/auth')

//@route /api/user/wishlist
//@request POST
//@access private
router.post('wishlist', auth, async (req, res) => {


})