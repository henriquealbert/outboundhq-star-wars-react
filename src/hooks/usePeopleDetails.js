import { useAppContext } from 'contexts/AppContext';
import { extractID } from 'helper/extractID';
import { useQuery, useQueryClient } from 'react-query';

const fetchPeopleDetails = async (id) => {
  const res = await fetch(`http://swapi.dev/api/people/${id}`);
  return res.json();
};

export function usePeopleDetails(id) {
  const queryClient = useQueryClient();
  const { page } = useAppContext();

  return useQuery(['PeopleDetails', id], () => fetchPeopleDetails(id), {
    keepPreviousData: true,
    enabled: !!id,
    initialData: () => {
      return queryClient
        .getQueryData(['People', page])
        ?.results?.find((data) => extractID(data.url) === id);
    }
  });
}
