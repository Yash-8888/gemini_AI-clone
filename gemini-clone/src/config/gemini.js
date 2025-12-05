export async function runChat(prompt) {
  const response = await fetch("https://gemini-ai-clone-1.onrender.com/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await response.json();
  return data.reply;
}
