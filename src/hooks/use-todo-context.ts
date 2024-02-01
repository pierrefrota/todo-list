import { useContext } from 'react';

import { TodoContext, TodoContextProps } from '@/contexts/todo-context';

export function useTodo(): TodoContextProps {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodoContext deve ser usado dentro de um TodoProvider');
  }

  return context;
}
