import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

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
