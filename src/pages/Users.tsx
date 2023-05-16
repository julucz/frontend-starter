import { Link } from "react-router-dom";
import { useUsers } from "../hooks/users";

function Users(): JSX.Element {
  const { data, error, isError, isLoading } = useUsers();

  if (isLoading) {
    return <div>Loading …</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <Link to="/">Home</Link>

      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} <Link to={user.id.toString()}>Go to profile</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
