export const addClass = async (gradelevel,classname,email,url,student,term) => {
    let emails=[]
    emails.push(email)
    let projects=[]
    let parsedstudents = JSON.parse(student)
  const res = await fetch(`./api/addclass`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        gradelevel:gradelevel,
        classname:classname,
        teachers:emails,
        students:parsedstudents,
        projects:projects,
        url:url,
        term: term
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};