import axios from "axios";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
});

const usersSchmea = z.array(userSchema);

type User = z.infer<typeof userSchema>;

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

interface Error {
  message: string;
}

async function getUser(id: string) {
  const { data } = await instance.get<User>(`/users/${id}`);

  return userSchema.parse(data);
}

function useUser(id: string) {
  return useQuery<User, Error>({ queryKey: ["users", id], queryFn: () => getUser(id) });
}

async function getUsers() {
  const { data } = await instance.get<User[]>(`/users`);

  return usersSchmea.parse(data);
}

function useUsers() {
  return useQuery<User[], Error>({ queryKey: ["users"], queryFn: getUsers });
}

export { useUsers, useUser };
