import { Link } from "react-router-dom";

function Home(): JSX.Element {
  return (
    <div>
      <h1>Home</h1>
      <Link to="about">About</Link>
    </div>
  );
}

export default Home;
