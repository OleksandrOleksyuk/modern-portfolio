import { createBrowserRouter } from "react-router-dom";
import { Starter } from "./components";
import App from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <Starter /> },
  { path: "/home", element: <App /> },
]);
