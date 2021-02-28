import styles from 'styles/components/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with <span>❤</span> by{' '}
        <a
          href="https://github.com/henriquealbert"
          target="_blank"
          rel="noreferrer"
        >
          Henrique Albert Schmaiske
        </a>
      </p>
    </footer>
  );
};
