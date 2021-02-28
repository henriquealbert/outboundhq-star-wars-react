import { useParams } from 'react-router-dom';

import { Error } from 'components/Error';
import { Layout } from 'components/Layout';
import { Spinner } from 'components/Spinner';
import { PeopleDetails } from 'components/PeopleDetails';

import { usePeopleDetails } from 'hooks/usePeopleDetails';

export const Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = usePeopleDetails(id);

  return (
    <Layout>
      <h1>Details</h1>
      {isLoading && <Spinner />}
      {isError && (
        <p>
          Error: <Error error={error} />
        </p>
      )}

      {data && <PeopleDetails data={data} />}
    </Layout>
  );
};
