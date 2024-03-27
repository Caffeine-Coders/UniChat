export const addClass = async (gradelevel,classname,email,url) => {
    let emails=[]
    emails.push(email)
    let students=[]
  const res = await fetch(`./api/addclass`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        gradelevel:gradelevel,
        classname:classname,
        teachers:emails,
        students:students,
        url:url
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};