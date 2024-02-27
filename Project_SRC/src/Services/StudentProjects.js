export const fetchStudentProjects = async (studentId) => {
  try {
    const response = await fetch(`/api/students/projects/getStudentProjects?studentId=${studentId}`);
    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error("Error fetching student projects:", error);
    return [];
  }
};
