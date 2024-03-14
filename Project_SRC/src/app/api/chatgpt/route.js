import { NextResponse } from "next/server";

export async function POST(request) {
  const messages = await request.json();
  console.log(messages);

  console.log(JSON.stringify(messages));

  const url = "https://gpt-proxy.ualbany.org/openai";
  const auth =
    "Basic " + Buffer.from("ikit:De99McEh5uNsdBVCyt").toString("base64");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
    body: JSON.stringify(messages),
  });

  console.log(response);

  const data = await response.text();

  console.log(data);

  return NextResponse.json({ data });
}
