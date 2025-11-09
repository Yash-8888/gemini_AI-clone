s



// To run this code you need to install:
// npm install @google/genai mime

import { GoogleGenAI } from "@google/genai";
import mime from "mime";
import { writeFile } from "fs";

function saveBinaryFile(fileName, content) {
  writeFile(fileName, content, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file ${fileName}:`, err);
      return;
    }
    console.log(`File ${fileName} saved successfully.`);
  });
}

async function main() {
  // You can replace this with your API key directly for testing (not recommended for production)
  // const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY_HERE" });
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const config = {
    responseModalities: ["IMAGE", "TEXT"],
    imageConfig: {
      imageSize: "1K",
    },
  };

  const model = "gemini-2.5-flash-image";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: "a cute robot sitting under a tree, digital art", // 👈 your prompt here
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fileIndex = 0;

  for await (const chunk of response) {
    const parts = chunk?.candidates?.[0]?.content?.parts;
    if (!parts) continue;

    for (const part of parts) {
      if (part.inlineData) {
        const fileName = `generated_image_${fileIndex++}`;
        const inlineData = part.inlineData;
        const fileExtension = mime.getExtension(inlineData.mimeType || "image/png");
        const buffer = Buffer.from(inlineData.data || "", "base64");
        saveBinaryFile(`${fileName}.${fileExtension}`, buffer);
      } else if (part.text) {
        console.log("📝 Text Output:", part.text);
      }
    }
  }
}

main().catch(console.error);
