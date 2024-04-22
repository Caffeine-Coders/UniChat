const cururl = window.location.href
const isproject = cururl.endsWith("/projectdetails")
const fetchurl = isproject? `/api/teacherapi/addtogpt` : `/api/teacherapi/addtogpt`
export const appendGPT = async (msgs, email) => {
    console.log("here in storegpt",msgs,email)
  const res = await fetch(fetchurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        messages: msgs,
        email: email
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};