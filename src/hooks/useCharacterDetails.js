import { useAppContext } from 'contexts/AppContext';
import { extractID } from 'helper/extractID';
import { useQuery, useQueryClient } from 'react-query';

const fetchCharacterDetails = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  return res.json();
};

export function useCharacterDetails(id) {
  const queryClient = useQueryClient();
  const { page } = useAppContext();

  return useQuery(['CharacterDetails', id], () => fetchCharacterDetails(id), {
    keepPreviousData: true,
    enabled: !!id,
    initialData: () => {
      return queryClient
        .getQueryData(['Characters', page])
        ?.results?.find((data) => extractID(data.url) === id);
    }
  });
}
