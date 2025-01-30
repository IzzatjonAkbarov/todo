import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Todo from "./components/todo/index.jsx";
import "./index.css";
import Cards from "./components/cards/index.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Todo />
    <br />
    <Cards />
  </StrictMode>
);
