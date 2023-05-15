import { Link, useParams } from "react-router-dom";
import { useUser } from "../hooks/users";

function User(): JSX.Element {
  const { userId } = useParams();

  const { data, error, isError, isLoading } = useUser(userId || "");

  if (!userId || isLoading) {
    return <div>Loading …</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default User;
