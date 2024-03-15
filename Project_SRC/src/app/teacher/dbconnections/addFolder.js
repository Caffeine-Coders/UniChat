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

  };
  