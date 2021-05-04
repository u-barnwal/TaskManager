import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { TaskAPI } from "../../api/task.api";
import { TaskDTO } from "../../dto/task.dto";

interface Props extends TaskDTO {
  onTaskDelete: (id: number) => void;
}

function Task({ id, title, description, onTaskDelete }: Props) {
  const deleteTask = async () => {
    await TaskAPI.deleteOne(id);
    onTaskDelete(id);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" color="primary">
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
