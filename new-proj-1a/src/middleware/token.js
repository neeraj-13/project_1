const jwt = require('jsonwebtoken');

const generateAuthToken =  (username, password) => {
  try {
    return jwt.sign({ username, password}, process.env.SECRET_KEY, { expiresIn: '10h' });
  } catch (error) {
    throw error;
  }
};
module.exports = {
  generateAuthToken
}