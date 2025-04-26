import React from "react";
import { PaginationApi } from "@/hooks/usePagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface CustomPaginationProps {
  paginationApi: PaginationApi;
  totalResults?: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  paginationApi,
  totalResults,
}) => {
  const { handleChangePage, page } = paginationApi;

  const totalRecords = totalResults || 0;
  const pageSize = 10;
  const totalPages = Math.ceil(totalRecords / pageSize);
  const pageNumbers = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1);

    if (page > 3) {
      pageNumbers.push(null);
    }

    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (page < totalPages - 2) {
      pageNumbers.push(null);
    }

    pageNumbers.push(totalPages);
  }

  return (
    <div className="w-full">
      <Pagination>
        <PaginationContent className="w-full flex flex-row justify-between items-center">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => page > 1 && handleChangePage(page - 1)}
            />
          </PaginationItem>
          <div className="flex flex-row gap-1">
            {pageNumbers.map((pageNumber, index) =>
              pageNumber === null ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => handleChangePage(pageNumber)}
                    isActive={page === pageNumber}
                    className={`${
                      page === pageNumber &&
                      "bg-primary/10 text-primary border-0"
                    }`}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
          </div>
          <PaginationItem>
            <PaginationNext
              onClick={() => page < totalPages && handleChangePage(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
