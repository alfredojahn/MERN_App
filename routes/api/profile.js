const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { body, validationResult } = require('express-validator');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );
    if (!profile) {
      return res
        .status(400)
        .json([{ msg: 'There is no profile for this user' }]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

// @route   POST api/profile/me
// @desc    Fill/Update Users Profile
// @access  Private
router.post(
  '/me',
  [
    auth,
    body('status', 'Status is required').not().isEmpty(),
    body('skills', 'Skills is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json([{ errors: errors.array() }]);
    }
    const { website, skills, youtube, twitter, instagram, linkedin, facebook } =
      req.body;
  }
);

module.exports = router;
