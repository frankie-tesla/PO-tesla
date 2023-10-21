import App from "./App";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Share from "./pages/Share";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "share", element: <Share /> },
      { path: "favorite", element: <Favorite /> },
      { path: "search", element: <Search /> }
    ]
  }
]);
