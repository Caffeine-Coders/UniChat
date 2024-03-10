export async function POST(request){
    const data = await request.json()
    console.log("got the data",data)
      const response = await fetch("https://www.googleapis.com/drive/v3/files?key=AIzaSyBBaGYZ9WbmFQEe-uLgNiqzf7ZTrOqYnrg&scope=${encodeURIComponent(https://www.googleapis.com/auth/drive)}",data);
      const json = await response.json();
    console.log(response)
    console.log("json",json)
    return new Response("User added successfully", { status: 200 });
}