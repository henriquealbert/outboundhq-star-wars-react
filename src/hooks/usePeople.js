import { useQuery } from 'react-query';

const fetchPeople = async (page) => {
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

export function usePeople(page) {
  return useQuery(['People', page], () => fetchPeople(page), {
    keepPreviousData: true
  });
}
