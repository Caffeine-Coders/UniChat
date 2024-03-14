export async function getStudentData(databasename, studentId) 
{
    const response = await fetch(`/api/students/getStudentData?databasename=${databasename}&studentId=${studentId}`);
    const data = await response.json();
    return data.studentData;
}