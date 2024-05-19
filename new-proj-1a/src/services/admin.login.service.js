const generateAuthToken = require("../middleware/token");
const query = require("../queries/login.query");
const bcrypt = require("bcrypt");
const customException = require("../../commons/exception/customException");
const statusCode = require("../../commons/utils/statusCode");
const addAdmin = async (body, session) => {
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10); 
    const bodyWithHashedPassword = {
      ...body,
      password: hashedPassword
    };
    body.role = "admin";
    return await query.saveAdmin(bodyWithHashedPassword, session);
  } catch (error) {
    throw error;
  }
};
const login = async (body) => {
  try {
    const { username, password } = body;
    const user = await query.findByEmail(username);
    let isValidCredentials = false;
    if (user) {
      isValidCredentials = await bcrypt.compare(password, user.password);
    }
    if (!isValidCredentials) {
      throw customException.error(
        statusCode.NOT_FOUND,
        null,
        "Invalid Credentials"
      );
    }
    const token = await generateAuthToken.generateAuthToken(username, password);
    return {token};
  } catch (error) {
    throw error;
  }
};
module.exports = {
  addAdmin,
  login,
};