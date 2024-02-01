import styles from './styles.module.scss';

export function SkeletonTodoItem() {
  return (
    <div className={styles['to-do-item-skeleton']}>
      <div className={styles.content}>
        <div className={styles.checkbox}></div>
        <div className={styles.paragraph}></div>
      </div>
      <div className={styles.delete}></div>
    </div>
  );
}
