const facultyQuery = require("../queries/faculty.query")
const generateAuthToken = require("../middleware/token");


const login = async (body) => {
  try {
    const { facultyId } = body;
    const faculty = await facultyQuery.findByFacultyId(facultyId);
    if(!faculty){
       throw customException.error(
        statusCode.NOT_FOUND,
        null,
        "Invalid Credentials"
      );
    }
    const token = await generateAuthToken.generateAuthToken(faculty._id);
    return token;
  } catch (error) {
    throw error;
  }
};
const getFacultyByEmail = async (facultId) => {
    try {
        const getFaculty = await facultyQuery.getFacultyByEmail(facultId);
        if (!getFaculty) {
            return `${facultId} is not associted with any id. Please check...`;
        };
        return getFaculty
    } catch (error) {
        throw error
    }
}

module.exports = {
    getFacultyByEmail,
    login
};