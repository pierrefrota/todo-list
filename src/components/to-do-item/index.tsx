import { classMany as cm } from 'classmany';
import { Check, Trash } from 'lucide-react';

import { ToDo } from '@/contexts/todo-context';
import { useTodo } from '@/hooks/use-todo-context';
import { RenderIf } from '@/utils/structural-components';

import { ButtonIcon } from '../ui/button';
import styles from './styles.module.scss';

export function ToDoItem({ item }: { item: ToDo }) {
  const { removeTodo, toggleTodoCheck } = useTodo();

  return (
    <div className={styles['to-do-item']}>
      <div onClick={() => toggleTodoCheck(item.id)}>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span
            className={cm(styles.checkbox, {
              [styles.unchecked]: !item.isCompleted,
              [styles.checked]: item.isCompleted,
            })}
          >
            <RenderIf condition={item.isCompleted}>
              <Check size={12} />
            </RenderIf>
          </span>

          <p
            className={cm(styles.paragraph, {
              [styles.checked]: item.isCompleted,
            })}
          >
            {item.todo}
          </p>
        </label>
      </div>

      <ButtonIcon onClick={() => removeTodo(item.id)} aria-label="Excluir task">
        <Trash size={16} />
      </ButtonIcon>
    </div>
  );
}
