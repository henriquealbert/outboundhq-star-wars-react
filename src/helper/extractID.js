export const extractID = (data) => {
  const id = data?.replace(/[^0-9]/g, '');
  return id;
};
