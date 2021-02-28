import { useHomeWorld } from 'hooks/useHomeworld';
import { Error } from './Error';

export const HomeWorld = ({ planetID }) => {
  // api call to get the planet name
  const { data, isError, error } = useHomeWorld(planetID);

  return (
    <>
      {isError && <Error error={error} />}
      {data && data.name}
    </>
  );
};
