export const ProjectList = async (classname,classnumber,classyear,semails,temails) => {
    console.log("here in get ",classname,classnumber,classyear,semails,temails)
    const res = await fetch(`./api/getprojects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ 
        classname:classname,
        classnumber:classnumber,
        classyear:classyear,
        semails:semails,
        temails:temails
        })
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  };