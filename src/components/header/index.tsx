import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="/assets/logo.png" alt="" />
      </a>
    </header>
  );
}
