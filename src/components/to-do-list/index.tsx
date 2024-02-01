import { Clipboard } from 'lucide-react';

import { useTodo } from '@/hooks/use-todo-context';
import { RenderIf, RenderMap } from '@/utils/structural-components';

import { ToDoItem } from '../to-do-item';
import { SkeletonTodoItem } from '../ui/skeleton';
import styles from './styles.module.scss';

export function ToDoList() {
  const { todoList, isLoadingTodoList } = useTodo();

  return (
    <div className={styles['to-do-list']}>
      <RenderIf condition={todoList.length > 0 && !isLoadingTodoList}>
        <div className={styles['todo-list-container']}>
          <RenderMap each={todoList} render={(item) => <ToDoItem key={item.id} item={item} />} />
        </div>
      </RenderIf>

      <RenderIf condition={isLoadingTodoList}>
        <div className={styles['todo-list-container']}>
          <RenderMap each={Array.from(':D')} render={(_, index) => <SkeletonTodoItem key={index} />} />
        </div>
      </RenderIf>

      <RenderIf condition={todoList.length === 0 && !isLoadingTodoList}>
        <div className={styles.empty}>
          <Clipboard width={56} height={56} />
          <span>Você ainda não tem tarefas cadastradas</span>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </RenderIf>
    </div>
  );
}
