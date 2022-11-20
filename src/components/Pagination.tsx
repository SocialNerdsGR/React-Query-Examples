import { useCallback, useState } from "react";
import { Button } from "./Button";

const FIRST_PAGE = 1;

type PaginationProps = {
  page: number;
  nextPage: () => void;
  previousPage: () => void;
};

export function Pagination({ page, nextPage, previousPage }: PaginationProps) {
  return (
    <div className="Pagination">
      <Button disabled={page === FIRST_PAGE} onClick={previousPage}>
        Previous page
      </Button>
      <span className="PaginationActive">{page}</span>
      <Button onClick={nextPage}>Next page</Button>
    </div>
  );
}

export function usePagination() {
  const [page, setPage] = useState(1);

  const nextPage = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  const previousPage = useCallback(() => {
    if (page === FIRST_PAGE) {
      return;
    }
    setPage((p) => p - 1);
  }, [page]);

  return { page, nextPage, previousPage };
}
