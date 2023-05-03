import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ThemeSelector from "../components/ThemeSelector";

function Home(): JSX.Element {
  return (
    <div>
      <ThemeSelector />
      <h1>Home</h1>
      <Link to="about">About</Link>
    </div>
  );
}

export default Home;
