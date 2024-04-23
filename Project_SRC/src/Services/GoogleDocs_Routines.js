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

export const createDoc = async (title, content) => {
  const apiToken = sessionStorage.getItem("googleAccessToken");
  try {
    // Create a new document
    const response = await fetch(
      `https://docs.googleapis.com/v1/documents`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          title: title,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const file = await response.json();
    const documentId = file.documentId;

    // Add text to the document
    const updateResponse = await fetch(
      `https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          requests: [
            {
              insertText: {
                location: {
                  index: 1,
                },
                text: content,
              },
            },
          ],
        }),
      }
    );

    if (!updateResponse.ok) {
      throw new Error(`HTTP error! status: ${updateResponse.status}`);
    }

    console.log(`Document created with ID: ${documentId}`);
    return documentId;
  } catch (error) {
    console.error("Error:", error);
  }
};