import { useQuery } from 'react-query';

const fetchHomeWorld = async (id) => {
  const res = await fetch(`https://swapi.dev/api/planets/${id}`);
  return res.json();
};

export function useHomeWorld(id) {
  return useQuery(['HomeWorld', id], () => fetchHomeWorld(id), {
    keepPreviousData: true,
    enabled: !!id
  });
}
