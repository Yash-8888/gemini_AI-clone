# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🌟 Gemini AI Clone (React + Node.js)

A fully functional Gemini-like AI chat application built using React + Vite on the frontend and Node.js + Express on the backend.
Includes sidebar history, typing animation, and a clean modern UI.

🚀 Features
⭐ Frontend (React)

Gemini-style UI

Typing animation for responses

Sidebar with recent prompts

Click-to-reuse prompts

Input suggestions

Clean, responsive layout

⭐ Backend (Node.js)

Gemini API integration

Single /chat endpoint

Protected API key (ENV)

CORS enabled

JSON response

🛠️ Setup
🔹 Frontend
npm install
npm run dev


Runs on:

http://localhost:5173

🔹 Backend
cd backend
npm install


Create .env:

GEMINI_API_KEY=your_api_key_here


Run:

node server.js


Backend runs on:

http://localhost:5000/chat

🔗 API Usage Example
export const runChat = async (prompt) => {
  const response = await axios.post("http://localhost:5000/chat", { prompt });
  return response.data.reply;
};

💡 Future Improvements

Dark/light theme

LocalStorage history

Image upload

Multiple model selection

Auth system

👨‍💻 Author

Your Name
Made with ❤️ using React & Node.js