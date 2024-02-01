import { classMany as cm } from 'classmany';
import { ReactNode } from 'react';

import styles from './styles.module.scss';

export interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return <div className={cm(styles.badge)}>{children}</div>;
}
