import { classMany as cm } from 'classmany';
import { PlusCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

import { useTodo } from '@/hooks/use-todo-context';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import styles from './styles.module.scss';

export function CreateTask() {
  const [task, setTask] = useState('');

  const { createTodo } = useTodo();

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!task) {
      return;
    }

    createTodo(task);
    setTask('');
  }

  return (
    <form className={cm(styles['create-task'])} onSubmit={handleCreateTask}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(text) => setTask(text.target.value)}
        autoFocus
      />
      <Button aria-label="Criar task">
        Criar
        <PlusCircle width={24} height={24} />
      </Button>
    </form>
  );
}
