export async function getChatGPTResponse(messagehistory) {

  const response = await fetch(`/api/chatgpt/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages: messagehistory }),
  });
  
  const data = await response.json();
  return data;
}


export async function storeChatGPTResponse(projectID, databasename, messages) {
  const response = await fetch(`/api/chatgpt/storechat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      projectID: projectID, 
      databasename: databasename, 
      messages: messages 
    }),
  });
  console.log(response);
  const data = await response.json();
  return data;
}

export async function getChatGPTResponseFromDB(projectID, databasename) {
  const response = await fetch(
    `/api/chatgpt/storechat?projectID=${projectID}&databasename=${databasename}`
  );

  const data = await response.json();
  console.log(data.messages);
  return data.messages;
}