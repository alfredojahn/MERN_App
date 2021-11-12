const express = require('express');
const router = express.Router();

// @Route   POST api/users
// @desc    Test route
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('User Route');
});

module.exports = router;
