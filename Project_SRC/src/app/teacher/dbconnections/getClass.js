export const classList = async (teacheremail) => {
    const res = await fetch(`/api/teacherapi/getclasses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ 
        teacheremail:teacheremail,
        })
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  };