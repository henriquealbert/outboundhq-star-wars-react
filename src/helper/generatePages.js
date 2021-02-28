/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
export const generatePages = (from, to, step = 1) => {
  let i = from;
  const pagesArray = [];

  while (i <= to) {
    pagesArray.push(i);
    i += step;
  }

  return pagesArray;
};
