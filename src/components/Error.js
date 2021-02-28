import styles from 'styles/components/Error.module.css';

export const Error = ({ error }) => (
  <span className={styles.error}>{error?.message}</span>
);
