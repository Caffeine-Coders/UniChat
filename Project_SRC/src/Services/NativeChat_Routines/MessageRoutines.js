export async function AddMessage(databasename, projectID, message) {
    const response = await fetch(`/api/NativeChat/AddMessageData`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ databasename: databasename, projectID: projectID, message: message }),
    });
    const data = await response.json();
    return data;
}