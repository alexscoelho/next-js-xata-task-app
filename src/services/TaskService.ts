import { Task } from "../xata";

export const createTask = (task: Task): Promise<Task> => {
  return fetch("/api/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const updateTask = (task: Task): Promise<Task> => {
  return fetch("/api/task", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...task,
      done: !task.done,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
};
