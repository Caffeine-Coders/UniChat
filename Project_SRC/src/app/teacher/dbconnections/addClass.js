export const addClass = async (gradelevel,classname) => {
  const res = await fetch(`./api/addclass`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        gradelevel:gradelevel,
        classname:classname,
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};