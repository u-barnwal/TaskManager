import React from "react";
import { TaskDTO } from "../../pages/api/dto/task.dto";

interface Props extends TaskDTO {}

function Task({ title, description }: Props) {
  return (
    <div>
      {title}
      <br />
      {description}
    </div>
  );
}

export default Task;
