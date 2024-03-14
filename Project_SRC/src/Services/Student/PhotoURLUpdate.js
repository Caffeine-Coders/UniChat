export async function UpdatePhotoURL(databasename, studentemail, photoUrl) {
    const response = await fetch(`/api/students/updatePhotoUrl`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            databasename: databasename, 
            studentemail: studentemail,
            photoUrl: photoUrl }),
    });
    const data = await response.json();
    return data;
}