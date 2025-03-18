import { Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
const Todos = () => {
  const todos: any = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Todos - MUI + VITE</title>
      </Helmet>
      <Typography variant="h1">This is the About Page</Typography>
      <Stack>
        {todos.map((todo) => {
          return (
            <Stack key={todo.id}>
              <Typography>{todo.todo}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export async function loader() {
  const res = await fetch("https://dummyjson.com/todos");
  const { todos } = await res.json();
  return todos;
}

export default Todos;
