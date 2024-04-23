export const ProjectList = async (classname,classnumber,classyear) => {
    console.log("here in get ",classname,classnumber,classyear)
    const res = await fetch(`/api/teacherapi/getprojects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ 
        classname:classname,
        classnumber:classnumber,
        classyear:classyear,
        })
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  };