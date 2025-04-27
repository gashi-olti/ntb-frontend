import * as React from "react";

import constants from "@/config/constants";

export interface PaginationApi {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  handleChangePage: (newPage: number) => void;
  handleChangePerPage: (newPerPage: number) => void;
}

function usePagination(): PaginationApi {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(
    constants.pagination.defaultPerPage
  );

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangePerPage = (newPerPage: number) => {
    setPerPage(newPerPage);
  };

  return {
    page,
    setPage,
    perPage,
    setPerPage,
    handleChangePage,
    handleChangePerPage,
  };
}

export default usePagination;
