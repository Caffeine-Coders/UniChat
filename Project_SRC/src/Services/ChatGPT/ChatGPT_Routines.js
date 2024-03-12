export async function getChatGPTResponse(message, messagehistory) 
{
    messagehistory.length > 0? messagehistory.push({
        "role": "user", 
        "content": message,
    }): messagehistory = [{
        "role": "user", 
        "content": message,
    }];   

    const response = await fetch(
        `https://ikit:De99McEh5uNsdBVCyt@gpt-proxy.ualbany.org/openai`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: messagehistory
            }),
        }
    );

    const data = await response.json();
    return data;
}
