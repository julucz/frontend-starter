import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App(): JSX.Element {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="public/css/light.css" />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
