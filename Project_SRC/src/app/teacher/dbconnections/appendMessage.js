export async function sendMessage(databasename, projectID, message) {
    console.log("here in send message",databasename,projectID,message)
    const response = await fetch(`/api/teacherapi/appendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ databasename: databasename, projectID: projectID, message: message }),
    });
    const data = await response.json();
    return data;
    // return "done"
}