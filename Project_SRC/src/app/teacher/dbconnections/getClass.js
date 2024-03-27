export const classList = async () => {
    const res = await fetch(`./api/getclasses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
  
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  };