import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { TaskDTO } from "../../dto/task.dto";

interface Props extends TaskDTO {}

function Task({ title, description }: Props) {
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

        <Button size="small" variant="contained" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Task;
