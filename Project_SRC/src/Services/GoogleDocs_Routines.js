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

    const file = await response.json();
    const fileName = file.title;
    let textFromFile = "";
    file.body.content.forEach((contentItem) => {
      if (contentItem.paragraph) {
        contentItem.paragraph.elements.forEach((element) => {
          if (element.textRun) {
            textFromFile += element.textRun.content;
          }
        });
      }
    });
    console.log(textFromFile);
    return [fileName, textFromFile];
  } catch (error) {
    console.error("Error:", error);
  }
};
