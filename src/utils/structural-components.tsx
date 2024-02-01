import { Children, type ReactNode } from 'react';

interface RenderIfProps {
  condition: boolean;
  children: ReactNode;
}

interface RenderMapProps<T> {
  each: T[];
  render: (item: T, index?: number) => ReactNode;
}

export function RenderIf({ condition, children }: RenderIfProps) {
  return condition ? children : null;
}

export function RenderMap<T>({ each, render }: RenderMapProps<T>) {
  return Children.toArray(each.map((item, index) => render(item, index)));
}
