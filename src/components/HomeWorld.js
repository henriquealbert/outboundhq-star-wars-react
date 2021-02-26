import { useHomeWorld } from 'hooks/useHomeworld';

export const HomeWorld = ({ id }) => {
  const { data, isLoading, isError, error } = useHomeWorld(id);

  return (
    <>
      {isLoading && null}
      {isError && error.message}
      {data && data.name}
    </>
  );
};
