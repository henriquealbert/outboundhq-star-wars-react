import { Link } from 'react-router-dom';

import styles from 'styles/components/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/images/logo.png" alt="Star Wars Logo" title="Home" />
      </Link>
      <h1>🛸 Star Wars Characters</h1>
      <p>A list of all Star Wars characters.</p>
    </header>
  );
};
