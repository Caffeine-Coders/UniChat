export const classifyUser = async (email) => {
  console.log("here in getDetails")
  const res = await fetch(`/api/teacherapi/checkuser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  return data;
};