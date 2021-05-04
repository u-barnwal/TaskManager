import { TaskDTO } from "./dto/task.dto";

export class TaskAPI {
  static async getAll(): Promise<TaskDTO[]> {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "GET",
    });

    return await response.json();
  }
}
