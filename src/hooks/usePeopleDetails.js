import { useQuery } from 'react-query';

const fetchPeopleDetails = async (id) => {
  const res = await fetch(`http://swapi.dev/api/people/${id}`);
  return res.json();
};

export function usePeopleDetails(id) {
  return useQuery(['PeopleDetails', id], () => fetchPeopleDetails(id), {
    keepPreviousData: true,
    enabled: !!id
  });
}
