import { classMany as cm } from 'classmany';

import { useTodo } from '@/hooks/use-todo-context';

import { Badge } from '../ui/badge';
import styles from './styles.module.scss';

export function TaskMetrics() {
  const { todoMetrics } = useTodo();

  return (
    <div className={styles['task-metrics']}>
      <div className={cm(styles['metric-item'], styles['created-tasks'])}>
        <span>Tarefas criadas</span>
        <Badge>{todoMetrics.total}</Badge>
      </div>

      <div className={cm(styles['metric-item'], styles['completed-tasks'])}>
        <span>Concluídas</span>
        <Badge>
          {todoMetrics.completed} de {todoMetrics.total}
        </Badge>
      </div>
    </div>
  );
}
