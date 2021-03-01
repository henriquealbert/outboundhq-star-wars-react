import { generatePages } from 'helper/generatePages';
import { Button } from './Button';
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi';
import { useAppContext } from 'contexts/AppContext';

import styles from 'styles/components/Pagination.module.css';

export const Pagination = ({ data, isPreviousData }) => {
  const { page, setPage } = useAppContext();

  const pagesQuantity = Math.ceil(data.count / 10);
  const pagesArray = generatePages(1, pagesQuantity);

  return (
    <div className={styles.pagination}>
      <div className={styles.buttonsWrapper}>
        <Button
          type="button"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          <BiChevronsLeft /> Previous Page
        </Button>

        <div className={styles.pagesArray}>
          {pagesArray.map((pageBtn) => (
            // generating all page buttons
            <Button
              type="button"
              key={pageBtn}
              onClick={() => setPage(pageBtn)}
              disabled={page === pageBtn}
            >
              {pageBtn}
            </Button>
          ))}
        </div>
        <Button
          type="button"
          onClick={() => {
            if (!isPreviousData && data?.next) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !data?.next}
        >
          Next Page <BiChevronsRight />
        </Button>
      </div>

      <p>Current Page: {page}</p>
    </div>
  );
};
