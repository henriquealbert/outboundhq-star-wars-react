import { useFilm } from 'hooks/useFilm';

export const Film = ({ filmID }) => {
  const { data, isError, error } = useFilm(filmID);

  return (
    <>
      {isError && error.message}
      {data && data.title}
    </>
  );
};
