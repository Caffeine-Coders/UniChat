export const addStudent = async (inviteList,number,name,year) => {
    console.log("here in invite student",inviteList)
  const res = await fetch(`/api/teacherapi/invitestudent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        inviteList: inviteList,
        number:number,
        name:name,
        year:year
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};