import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

function Home(): JSX.Element {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="public/css/light.css" />
      </Helmet>
      Home
      <Link to="about">About</Link>
    </div>
  );
}

function About(): JSX.Element {
  return (
    <div>
      About
      <Link to="/">Home</Link>
    </div>
  );
}

export default App;
