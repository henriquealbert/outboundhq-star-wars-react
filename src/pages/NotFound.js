import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

import styles from 'styles/pages/NotFound.module.css';

export const NotFound = () => {
  return (
    <Layout>
      <div className={styles.notFound}>
        <h1>Woops...</h1>
        <h2>Page not found!</h2>

        <div className={styles.backHomeBtn}>
          <Link to="/">
            <Button type="button">
              <BiLeftArrowAlt /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
