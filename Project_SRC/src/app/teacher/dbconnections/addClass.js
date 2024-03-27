export const addClass = async (gradelevel,classname,email) => {
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
        emails:emails,
        students:students
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};