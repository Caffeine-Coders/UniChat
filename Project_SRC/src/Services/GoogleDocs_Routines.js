export const getDoc = async (selectedDocId) => {
    const apiToken = sessionStorage.getItem("googleAccessToken");
    try {
      const response = await fetch(
        `https://docs.googleapis.com/v1/documents/${selectedDocId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.body.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };