import { useFilm } from 'hooks/useFilm';
import { Error } from './Error';

export const Film = ({ filmID }) => {
  const { data, isError, error } = useFilm(filmID);

  return (
    <>
      {isError && <Error error={error} />}
      {data && data.title}
    </>
  );
};
