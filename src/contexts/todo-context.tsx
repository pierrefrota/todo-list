import { createContext, ReactNode, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ToDoMetrics {
  total: number;
  completed: number;
}

export interface ToDo {
  id: string;
  todo: string;
  isCompleted: boolean;
}

export interface TodoContextProps {
  todoList: ToDo[];
  createTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
  toggleTodoCheck: (id: string) => void;
  isLoadingTodoList: boolean;
  todoMetrics: ToDoMetrics;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext<TodoContextProps | null>(null);

export function TodoProvider({ children }: TodoProviderProps) {
  const [todoList, setTodoList] = useState<ToDo[]>([]);
  const [todoMetrics, setTodoMetrics] = useState<ToDoMetrics>({ completed: 0, total: 0 });
  const [isLoadingTodoList, setIsLoadingTodoList] = useState(true);

  function createTodo(todo: string): void {
    const id = uuidv4();
    setTodoList((currentValue) => {
      const newTodoList = [
        {
          id,
          todo,
          isCompleted: false,
        },
        ...currentValue,
      ];

      updateTodoList(newTodoList);
      return newTodoList;
    });
  }

  function toggleTodoCheck(id: string) {
    setTodoList((currentValue) => {
      const newTodoList = currentValue.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      });

      updateTodoList(newTodoList);

      return newTodoList;
    });
  }

  function removeTodo(id: string) {
    setTodoList((currentValue) => {
      const newTodoList = currentValue.filter((item) => item.id !== id);

      updateTodoList(newTodoList);

      return newTodoList;
    });
  }

  function updateTodoList(todoList: ToDo[]) {
    createMetrics(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  function createMetrics(todoList: ToDo[]) {
    const total = todoList.length;
    const completed = todoList.filter((item) => item.isCompleted).length;

    setTodoMetrics({
      total,
      completed,
    });
  }

  useEffect(() => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      const todoList = JSON.parse(storedTodoList);

      setTodoList(todoList);
      createMetrics(todoList);
    }

    delay();
  }, []);

  function delay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsLoadingTodoList(false);
        resolve('carregou');
      }, 2000);
    });
  }

  const contextValue = {
    todoList,
    createTodo,
    removeTodo,
    toggleTodoCheck,
    isLoadingTodoList,
    todoMetrics,
  };

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
}
