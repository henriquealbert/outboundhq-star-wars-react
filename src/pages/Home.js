import { Layout } from 'components/Layout';
import { People } from 'components/People';
import { usePeople } from 'hooks/usePeople';
import { useState } from 'react';

export const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, isPreviousData } = usePeople(page);

  const sortedByName =
    data &&
    data.results.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

  return (
    <Layout>
      {isLoading && <p>Loading Spinner...</p>}

      {isError && <p>Error: {error.message}</p>}

      {data &&
        sortedByName.map((people) => (
          <People key={people.url} people={people} />
        ))}

      {data && (
        <div>
          <span>Current Page: {page}</span>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <button
            onClick={() => {
              if (!isPreviousData && data?.next) {
                setPage((old) => old + 1);
              }
            }}
            // Disable the Next Page button until we know a next page is available
            disabled={isPreviousData || !data?.next}
          >
            Next Page
          </button>
        </div>
      )}
    </Layout>
  );
};
