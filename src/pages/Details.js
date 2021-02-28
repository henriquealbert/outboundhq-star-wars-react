import { Layout } from 'components/Layout';
import { PeopleDetails } from 'components/PeopleDetails';
import { usePeopleDetails } from 'hooks/usePeopleDetails';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = usePeopleDetails(id);

  return (
    <Layout>
      <h1>Details</h1>
      {isLoading && <p>Loading Spinner...</p>}
      {isError && <p>Error: {error.message}</p>}

      {data && <PeopleDetails data={data} />}
    </Layout>
  );
};
