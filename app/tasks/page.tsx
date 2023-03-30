import { getXataClient } from "../../src/xata";
import TaskList from "../components/taskList";
const xata = getXataClient();

export default async function Tasks() {
  const tasks = await xata.db.task.getMany();
  return <TaskList tasks={tasks} />;
}
