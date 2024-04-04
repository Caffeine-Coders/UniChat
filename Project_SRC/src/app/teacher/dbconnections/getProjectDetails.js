export const getProject = async (projectname) => {
    console.log("here in get ",projectname)
    const res = await fetch(`./api/getprojectdetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ 
        projectname:projectname
        })
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  };