// const cururl = window.location.href
// const isproject = cururl.endsWith("/projectdetails")
// const fetchurl = isproject? `/api/teacherapi/getgpt` : `/api/teacherapi/getgpt`
export const getgptchat = async (email) => {
    console.log("here in get gptchat ",email)
    const res = await fetch(`/api/teacherapi/getgpt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ 
        email:email
        })
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("dataaaa",data.msgs)
    return data.msgs;
  };