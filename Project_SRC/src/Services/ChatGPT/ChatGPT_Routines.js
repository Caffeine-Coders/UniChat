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

  const response = await fetch(`/api/chatgpt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages: messagehistory }),
  });

  const data = await response.json();
  return data;
}
