import { Link, useParams } from 'react-router-dom';

import { Error } from 'components/Error';
import { Layout } from 'components/Layout';
import { Spinner } from 'components/Spinner';
import { PeopleDetails } from 'components/PeopleDetails';
import { usePeopleDetails } from 'hooks/usePeopleDetails';
import { Button } from 'components/Button';
import { BiLeftArrowAlt } from 'react-icons/bi';

import styles from 'styles/pages/Details.module.css';

export const Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = usePeopleDetails(id);

  return (
    <Layout>
      <section className={styles.details}>
        {isLoading && <Spinner />}
        {isError && (
          <p>
            Error: <Error error={error} />
          </p>
        )}

        {data && <PeopleDetails data={data} />}
        <div className={styles.backBtn}>
          <Link to="/">
            <Button type="button">
              <BiLeftArrowAlt /> Back
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};
