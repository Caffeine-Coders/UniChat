export const getnativechat = async (projectid) => {
    console.log("here in get native msgs ",projectid)
    const res = await fetch(`/api/teacherapi/getmsgs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ 
        projectid: projectid
        })
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("dataaaa",data)
    return data;
  };