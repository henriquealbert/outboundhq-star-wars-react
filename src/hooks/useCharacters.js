import { useQuery } from 'react-query';

const fetchCharacters = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

export function useCharacters(page) {
  return useQuery(['Characters', page], () => fetchCharacters(page), {
    keepPreviousData: true
  });
}
