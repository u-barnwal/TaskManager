import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@material-ui/core";
import React from "react";
import { TaskAPI } from "../../api/task.api";
import { TaskDTO, TaskStatus } from "../../dto/task.dto";

interface Props extends TaskDTO {
  onTaskDelete: (id: number) => void;
  onTaskUpdate: (task: TaskDTO) => void;
}

const getTaskStatus = (status: TaskStatus) => {
  switch (status) {
    case TaskStatus.Created:
      return "Created";
    case TaskStatus.InProgress:
      return "In Progress";
    case TaskStatus.Done:
      return "Done";
    default:
      return "";
  }
};

const getTaskStatusColor = (status: TaskStatus) => {
  switch (status) {
    case TaskStatus.Created:
      return "gray";
    case TaskStatus.InProgress:
      return "orange";
    case TaskStatus.Done:
      return "green";
    default:
      return "";
  }
};

function Task({
  id,
  title,
  description,
  status,
  onTaskDelete,
  onTaskUpdate,
}: Props) {
  const deleteTask = async () => {
    await TaskAPI.deleteOne(id);
    onTaskDelete(id);
  };

  const taskDTO: TaskDTO = new TaskDTO();

  taskDTO.id = id;
  taskDTO.title = title;
  taskDTO.description = description;
  taskDTO.status = status;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>

        <Chip
          label={getTaskStatus(status)}
          style={{
            backgroundColor: getTaskStatusColor(status),
            color: "white",
          }}
        />
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => onTaskUpdate(taskDTO)}
        >
          Edit
        </Button>

        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={deleteTask}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Task;
