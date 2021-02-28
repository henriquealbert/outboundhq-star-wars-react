import { Layout } from 'components/Layout';
import { People } from 'components/People';
import { Spinner } from 'components/Spinner';
import { Pagination } from 'components/Pagination';
import { Error } from 'components/Error';
import { usePeople } from 'hooks/usePeople';
import { useAppContext } from 'contexts/AppContext';

import styles from 'styles/pages/Home.module.css';

export const Home = () => {
  const { page } = useAppContext();
  const { data, isLoading, isError, error, isPreviousData } = usePeople(page);

  const sortedByName =
    data &&
    data.results.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

  return (
    <Layout>
      {isLoading && (
        <div className="center">
          <Spinner />
        </div>
      )}

      {isError && (
        <p>
          Error: <Error error={error} />
        </p>
      )}

      {data && (
        <>
          <section className={styles.peopleList}>
            {sortedByName.map((people) => (
              <People key={people.url} people={people} />
            ))}
          </section>

          <Pagination data={data} isPreviousData={isPreviousData} />
        </>
      )}
    </Layout>
  );
};
