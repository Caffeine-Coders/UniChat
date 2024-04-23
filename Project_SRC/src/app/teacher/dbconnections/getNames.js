export const getMembers = async (semails,temails) => {
    console.log("here in get getnames ",semails,temails)
    const res = await fetch(`/api/teacherapi/getnames`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ 
        semails:semails,
        temails:temails
        })
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("dataaaa",data)
    return data;
  };