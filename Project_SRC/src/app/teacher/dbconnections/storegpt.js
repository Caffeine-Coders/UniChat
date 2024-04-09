export const appendGPT = async (msgs, email) => {
    console.log("here in storegpt",msgs,email)
  const res = await fetch(`./api/addtogpt`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ 
//         messages: msgs,
//         email: email
//      }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};