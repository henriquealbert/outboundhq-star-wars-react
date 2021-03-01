import { Layout } from 'components/Layout';
import { Characters } from 'components/Characters';
import { Spinner } from 'components/Spinner';
import { Pagination } from 'components/Pagination';
import { Error } from 'components/Error';
import { useCharacters } from 'hooks/useCharacters';
import { useAppContext } from 'contexts/AppContext';

import styles from 'styles/pages/Home.module.css';

export const Home = () => {
  const { page } = useAppContext();
  const { data, isLoading, isError, error, isPreviousData } = useCharacters(
    page
  );

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
          <section className={styles.charactersList}>
            {sortedByName.map((character) => (
              <Characters key={character.url} character={character} />
            ))}
          </section>

          <Pagination data={data} isPreviousData={isPreviousData} />
        </>
      )}
    </Layout>
  );
};
