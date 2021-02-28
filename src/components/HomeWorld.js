import { useHomeWorld } from 'hooks/useHomeworld';

export const HomeWorld = ({ planetID }) => {
  const { data, isError, error } = useHomeWorld(planetID);

  return (
    <>
      {isError && error.message}
      {data && data.name}
    </>
  );
};
