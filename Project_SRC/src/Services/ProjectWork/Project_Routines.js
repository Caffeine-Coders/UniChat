export async function addProject(databasename, projectName, projectDescription, studentIds, nativeChat, discordServerId) 
{
  try {
    const response = await fetch("/api/students/projects/addProjects", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        databasename,
        projectName,
        projectDescription,
        studentIds,
        nativeChat,
        discordServerId
      })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding project:", error);
    return {
      status: 500,
      message: error
    };
  }
}

export const fetchStudentProjects = async (databasename, studentId) => {
    try {
        const response = await fetch(`/api/students/projects/getStudentProjects?databasename=${databasename}&studentId=${studentId}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            },
        });
        const data = await response.json();
        return data.projects;
    } catch (error) {
      console.error("Error fetching student projects:", error);
      return [];
    }
  };