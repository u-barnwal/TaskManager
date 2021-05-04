import { Button, Grid } from "@material-ui/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import Task from "../components/Task";
import { TaskDTO } from "../dto/task.dto";
import { TaskAPI } from "../api/task.api";
import CreateTaskModal from "../components/models/CreateTaskModel";
import EditTaskModal from "../components/models/EditTaskModel";

export default function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [createTaskModelOpen, setCreateTaskModelOpen] = useState(false);
  const [updateTaskModelOpen, setUpdateTaskModelOpen] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState<undefined | TaskDTO>(
    undefined
  );

  const addTask = (task: TaskDTO) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (task: TaskDTO) => {
    setTasks(
      tasks.map((currentTask) =>
        currentTask.id === task.id ? task : currentTask
      )
    );
  };

  useEffect(() => {
    async function fetchAll() {
      const response = await TaskAPI.getAll();

      setTasks(response);
    }

    fetchAll();
  }, []);

  return (
    <div>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Simple Task Manager in ReactJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={1} style={{ padding: "10px" }}>
        <Grid item xs={3}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setCreateTaskModelOpen(true)}
          >
            Create Task
          </Button>
        </Grid>

        {tasks.map((task) => (
          <Grid item xs={3} key={task.id}>
            <Task
              {...task}
              onTaskDelete={deleteTask}
              onTaskUpdate={(task: TaskDTO) => {
                setTaskBeingEdited(task);
                setUpdateTaskModelOpen(true);
              }}
            />
          </Grid>
        ))}
      </Grid>

      <CreateTaskModal
        open={createTaskModelOpen}
        handleClose={() => setCreateTaskModelOpen(false)}
        onTaskCreated={addTask}
      />

      <EditTaskModal
        data={taskBeingEdited}
        open={updateTaskModelOpen}
        handleClose={() => setUpdateTaskModelOpen(false)}
        onTaskUpdate={updateTask}
      />
    </div>
  );
}
