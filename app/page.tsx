import TaskForm from "./components/taskForm";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <TaskForm />
    </main>
  );
}
