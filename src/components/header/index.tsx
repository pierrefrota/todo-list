import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/" aria-label="Ir para a tela inicial do todo list">
        <img src="/assets/logo.png" alt="todo app" width={126} height={48} />
      </a>
    </header>
  );
}
