const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req,res,next) => {
    // Get token from header
    const token = req.header('x-auth-token')
}