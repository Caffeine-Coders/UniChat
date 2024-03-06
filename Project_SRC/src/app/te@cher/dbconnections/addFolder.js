export const createFolderOptions = async()=>{
    console.log("here in add Folder");
    const res = await fetch(`./api/addfolder`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            Authorization : `Bearer ${localStorage.getItem("token")}`,
            
        },
        body: JSON.stringify({
            mimeType: "application/vnd.google-apps.folder",
            name: "My new google drive folder!",
        })
    })
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    // method: "POST",
    // headers: {
    //   Authorization: `Bearer ${token}`,
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify({
    //   mimeType: "application/vnd.google-apps.folder",
    //   name: "My new google drive folder!",
    // }),
  };
  
//   const response = await fetch("https://www.googleapis.com/drive/v3/files", createFolderOptions);
//   const json = await response.json();