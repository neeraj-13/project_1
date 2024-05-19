const studentQuery = require('../queries/student.query')
const saveStudent = async(body, session)=>{
    try {
        const{
            image,
            isActive,
            name,
            phone,
            sex,
            currentSem,
            email,
            fatherName,
            motherName,
            guardianPhoneNumber,
            department
          
            } = body;
          const studentData = {
            image,
            isActive,
            name,
            phone,
            sex,
            currentSem,
            email,
            fatherName,
            motherName,
            guardianPhoneNumber,
            department
          };
        return await studentQuery.saveStudent(studentData, session);
    } catch (error) {
        throw error;
    }
};
const viewStudent = async(id)=>{
    try {
        if(!id){
            throw customException.error(
                statusCode.NOT_FOUND,
                null,
                `${id} not found.`
              );
        }
        return await studentQuery.viewStudent(id);
    } catch (error) {
        throw error;
    }
};
const viewAllStudents = async()=>{
    try {
        const allStudents = await studentQuery.viewAllStudents();
        return allStudents
    } catch (error) {
        throw error;
    }
};
const updateStudent = async(id, body)=>{
    try {
        if(!id){
            return 'Please write the student ID...'
        }
        if(!await studentQuery.updateStudent(id)){
            return `${id} is not associted with any id. Please check...`
        }
        const updatedStudent = await studentQuery.updateStudent(id,body);
        return updatedStudent;
    } catch (error) {
     throw error;   
    }
};
const deleteStudent = async(id)=>{
    try {
      if (!id) {
        return "Please write the student ID...";
      }
      const result = await studentQuery.deleteStudent(id);
      return `${result}\nStudent profile deleted successfully.`;
        
    } catch (error) {
        throw error;
    }
};
module.exports = {
    saveStudent,
    viewStudent,
    viewAllStudents,
    updateStudent,
    deleteStudent
}