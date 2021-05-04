import { Grid } from "@material-ui/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import Task from "../components/Task";
import { TaskDTO } from "../dto/task.dto";
import { TaskAPI } from "../api/task.api";

export default function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const response = await TaskAPI.getAll();

      setTasks(response);
    }

    fetchAll();
  });

  return (
    <div>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Simple Task Manager in ReactJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={1}>
        {tasks.map((task) => (
          <Grid item xs={3} key={task.id}>
            <Task {...task} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
