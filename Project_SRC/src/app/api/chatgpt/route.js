export async function POST(request) {
  const messages = await request.json();
  console.log(messages);

  const url = "https://gpt-proxy.ualbany.org/openai";
  const auth =
    "Basic " + Buffer.from("ikit:De99McEh5uNsdBVCyt").toString("base64");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
    body: JSON.stringify({
      messages: messages,
    }),
  });

  console.log(response);

  const data = await response.json();

  return new Response(JSON.stringify({ data }), {
    headers: { "Content-Type": "application/json" },
  });
}
