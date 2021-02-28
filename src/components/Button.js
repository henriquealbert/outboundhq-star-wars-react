import styles from 'styles/components/Button.module.css';

export const Button = ({ children, disabled, onClick, type, props }) => (
  <button
    className={styles.button}
    type={type}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);
