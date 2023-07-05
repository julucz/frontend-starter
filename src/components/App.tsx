import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Users from "../pages/Users";
import User from "../pages/User";
import ThemeSelector from "./ThemeSelector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:userId",
    element: <User />,
  },
]);

function App(): JSX.Element {
  return (
    <>
      <ThemeSelector />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
