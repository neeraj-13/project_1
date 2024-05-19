const jwt = require('jsonwebtoken');

const generateAuthToken =  (facultyId) => {
  try {
    return jwt.sign({facultyId}, process.env.SECRET_KEY, { expiresIn: '10h' });
  } catch (error) {
    throw error;
  }
};
module.exports = {
  generateAuthToken
}