import { useHomeWorld } from 'hooks/useHomeworld';
import { Error } from './Error';

export const HomeWorld = ({ homeworldID }) => {
  // api call to get the planet name
  const { data, isError, error } = useHomeWorld(homeworldID);

  return (
    <>
      {isError && <Error error={error} />}
      {data && data.name}
    </>
  );
};
