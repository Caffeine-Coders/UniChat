export const addClass = async (gradelevel,classname,email,url,students,term) => {
    let emails=[]
    emails.push(email)
    let projects=[]
    // let students=[]
    // students.push(student)
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
        projects:projects,
        url:url,
        term: term
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};