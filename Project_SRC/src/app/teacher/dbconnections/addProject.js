export const addNewProject = async (pname,pgoal,teacherlist,studentlist,chat,cname,cnum,cyear) => {
  console.log("here in addproject file")
  const res = await fetch(`./api/addproject`, {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      pname:pname,
      pgoal:pgoal,
      tlist: teacherlist,
      slist:studentlist,
      chat:chat,
      cname:cname,
      cnum:cnum,
      cyear:cyear
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};