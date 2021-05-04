import { CreateTaskDTO } from "../dto/create-task.dto";
import { TaskDTO } from "../dto/task.dto";
import { UpdateTaskDTO } from "../dto/update-task.dto";

const baseURL = "http://localhost:3000";

export class TaskAPI {
  public static async getAll(): Promise<TaskDTO[]> {
    const response = await fetch(`${baseURL}/tasks`, {
      method: "GET",
    });

    return await response.json();
  }

  public static async createOne(createRequest: CreateTaskDTO) {
    const response = await fetch(`${baseURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createRequest),
    });

    return await response.json();
  }

  public static async deleteOne(id: number) {
    await fetch(`${baseURL}/tasks/${id}`, {
      method: "DELETE",
    });
  }

  public static async updateOne(id: number, updateRequest: UpdateTaskDTO) {
    const response = await fetch(`${baseURL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateRequest),
    });

    return await response.json();
  }
}
