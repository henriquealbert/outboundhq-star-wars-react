import { useQuery } from 'react-query';

const fetchPeople = async (page = '1') => {
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

export function usePeople(page) {
  return useQuery(['people', page], () => fetchPeople(page), {
    keepPreviousData: true
  });
}
