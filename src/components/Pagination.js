import { generatePages } from 'helper/generatePages';

import styles from 'styles/components/Pagination.module.css';

export const Pagination = ({ page, setPage, data, isPreviousData }) => {
  const pagesQuantity = Math.ceil(data.count / 10);
  const pagesArray = generatePages(1, pagesQuantity);

  return (
    <div className={styles.pagination}>
      <div className={styles.buttonsWrapper}>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>

        {pagesArray.map((pageBtn) => (
          // generating all page buttons
          <button
            key={pageBtn}
            onClick={() => setPage(pageBtn)}
            disabled={page === pageBtn}
          >
            {pageBtn}
          </button>
        ))}

        <button
          onClick={() => {
            if (!isPreviousData && data?.next) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !data?.next}
        >
          Next Page
        </button>
      </div>

      <p>Current Page: {page}</p>
    </div>
  );
};
