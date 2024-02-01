import { classMany as cm } from 'classmany';

import styles from './styles.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...props }: ButtonProps) {
  return <button className={cm(styles.button, styles.default)} {...props} />;
}

export function ButtonIcon({ ...props }: ButtonProps) {
  return <button className={cm(styles.button, styles.icon)} {...props} />;
}
