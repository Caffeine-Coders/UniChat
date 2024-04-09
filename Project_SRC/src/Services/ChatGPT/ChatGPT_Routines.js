"use client";
export async function getChatGPTResponse(message, messagehistory) {
  messagehistory.length > 0
    ? messagehistory.push({
        role: "user",
        content: message,
      })
    : (messagehistory = [
        {
          role: "user",
          content: message,
        },
      ]);

  console.log(messagehistory);

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
    body: JSON.stringify({ projectID, databasename, messages }),
  });

  const data = await response.json();
  return data;
}

export async function getChatGPTResponseFromDB(projectID, databasename) {
  const response = await fetch(
    `/api/chatgpt/storechat?projectID=${projectID}&databasename=${databasename}`
  );

  const data = await response.json();
  return data;
}