import { CreateTask } from './components/ create-task';
import { Header } from './components/header';
import { TaskMetrics } from './components/task-metrics';
import { ToDoList } from './components/to-do-list';
import { TodoProvider } from './contexts/todo-context';

export function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Header />
        <div className="container safe-area">
          <CreateTask />
          <TaskMetrics />
          <ToDoList />
        </div>
      </div>
    </TodoProvider>
  );
}
