import { classMany as cm } from 'classmany';

import styles from './styles.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <input className={cm(styles.input, styles.default)} {...props} />;
}
