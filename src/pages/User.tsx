import { Link, useParams } from "react-router-dom";
import { useUser } from "../hooks/users";
import { z } from "zod";

const paramsSchema = z.object({
  userId: z.string(),
});

type Params = z.infer<typeof paramsSchema>;

function User(): JSX.Element {
  const params = useParams<Params>();
  const { userId } = paramsSchema.parse(params);

  const { data, error, isError, isLoading } = useUser(userId);

  if (isLoading) {
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
