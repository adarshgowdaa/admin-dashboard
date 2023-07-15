import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function Pagination({ currentPage, pageSize, totalRecords, onPageChange }) {
  const totalPages = Math.ceil(totalRecords / pageSize);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className="flex justify-center items-center gap-8 mb-3 ">
      <IconButton
        size="lg"
        variant="outlined"
        className="py-2 px-4 ring-1 ring-red-600 text-white bg-red-600 disabled:bg-white disabled:text-red-600 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>

      <Typography color="gray" className="font-normal">
        Page <strong className="text-blue-gray-900">{currentPage}</strong> of{" "}
        <strong className="text-blue-gray-900">{pageNumbers.length}</strong>
      </Typography>

      <IconButton
        size="lg"
        variant="outlined"
        className="py-2 px-4 ring-1 ring-red-600 text-white bg-red-600 disabled:bg-white disabled:text-red-600 disabled:cursor-not-allowed"
        disabled={currentPage * pageSize >= totalRecords}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}

export default Pagination;
