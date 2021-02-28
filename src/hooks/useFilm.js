import { useQuery } from 'react-query';

const fetchFilm = async (id) => {
  const res = await fetch(`http://swapi.dev/api/films/${id}`);
  return res.json();
};

export function useFilm(id) {
  return useQuery(['Film', id], () => fetchFilm(id), {
    keepPreviousData: true,
    enabled: !!id
  });
}
