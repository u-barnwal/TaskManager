import Head from "next/head";
import { useEffect, useState } from "react";
import { TaskDTO } from "./api/dto/task.dto";
import { TaskAPI } from "./api/task.api";

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

      <ul>
        {tasks.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
