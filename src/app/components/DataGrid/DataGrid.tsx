import Link from "next/link";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import Button from "../ui/Button";
import FilterDropdown from "./FilterDropdown";
import Icons from "../ui/Icons";

export enum COLUMN_TYPE {
  DATE = "date",
  LINK = "link",
  CURRENCY = "currency",
  BADGE = "badge",
}

export interface ICOLUMN {
  label: string;
  key: string;
  type?: COLUMN_TYPE;
  formatter?: Function;
}

export const formatCurrency = (amount: number): string => {
  const roundedAmount = Math.round(amount * 10) / 10; // Rounds to 1 decimal place
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

interface DataGridProps {
  checkbox?: boolean;
  onBulkSelected?: Function;
  data: any[];
  columns: ICOLUMN[];
  sortBy?: string;
  sortOrder?: string;
  onSortToggle?: Function;
}

const DataGrid: React.FC<DataGridProps> = ({
  checkbox,
  onBulkSelected,
  data,
  columns,
  sortBy,
  sortOrder,
  onSortToggle,
}) => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(sortBy || "Due Date");
  const [order, setOrder] = useState(sortOrder || "asc");
  const empty = "- - - -";

  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col.key]).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data, columns]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredData.slice(start, start + limit);
  }, [filteredData, page, limit]);

  const totalPages = Math.ceil(filteredData.length / limit);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  const handleApplyFilters = (filters: any) => {
    console.log(filters);
  };

  const handleClearFilters = () => {};

  return (
    <div className="px-4">
      <div className="flex flex-col gap-2 md:gap-0 my-2 md:my-2 md:flex-row  justify-between md:items-center mb-4">
        <FilterDropdown
          fields={[
            { label: "Name", value: "name", type: "string" },
            { label: "Value", value: "value", type: "number" },
            { label: "Date", value: "date", type: "date" },
          ]}
          onApply={handleApplyFilters}
          onClear={handleClearFilters}
        />

        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md p-2 w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              {checkbox && (
                <th className="border border-gray-300 p-2 text-left"></th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  // className="border border-gray-300 p-2 text-left"
                  className={
                    "border border-gray-300 p-2 text-left text-xs " +
                    (col.type &&
                    [COLUMN_TYPE.CURRENCY, COLUMN_TYPE.DATE].includes(col.type)
                      ? "text-right"
                      : "text-left")
                  }
                >
                  <div
                    className="flex justify-between items-center"
                    role="button"
                    onClick={() => {
                      const newOrder = order == "asc" ? "desc" : "asc";
                      onSortToggle &&
                        onSortToggle({
                          sortBy: col.key,
                          sortOrder: newOrder,
                        });

                      setSort(col.key);
                      setOrder(newOrder);
                    }}
                  >
                    {col.label}
                    {col.key === sort && (
                      <span className="ml-2">
                        <Icons
                          type={order === "asc" ? "up" : "down"}
                          size={4}
                        />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 && (
              <tr className="text-center">
                <td className="text-center text-sm" colSpan={columns.length}>
                  No Records Found
                </td>
              </tr>
            )}
            {paginatedData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {checkbox && (
                  <td
                    key={idx + "cb"}
                    className="border border-gray-300 p-2 text-center"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 focus:ring-primary-900 ring:ring-primary-800 disabled:cursor-not-allowed"
                      onClick={() => onBulkSelected && onBulkSelected(row)}
                      disabled={row.status !== "Pending Approval"}
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="border border-gray-300 p-2 text-sm"
                  >
                    {col.type === COLUMN_TYPE.CURRENCY &&
                      [
                        COLUMN_TYPE.DATE,
                        COLUMN_TYPE.LINK,
                        COLUMN_TYPE.BADGE,
                      ].includes(col.type) == false && (
                        <div className="text-right">
                          {formatCurrency(
                            Number(+row[col.key].replace(",", ""))
                          ) || empty}
                        </div>
                      )}

                    {col.type == COLUMN_TYPE.LINK &&
                      [
                        COLUMN_TYPE.DATE,
                        COLUMN_TYPE.CURRENCY,
                        COLUMN_TYPE.BADGE,
                      ].includes(col.type) == false && (
                        <Link
                          className="text-primary-800 hover:text-primary-900"
                          href={`/invoice/${encodeURIComponent(row[col.key])}`}
                        >
                          {row[col.key] || empty}
                        </Link>
                      )}

                    {col.type == COLUMN_TYPE.DATE &&
                      [
                        COLUMN_TYPE.LINK,
                        COLUMN_TYPE.CURRENCY,
                        COLUMN_TYPE.BADGE,
                      ].includes(col.type) == false && (
                        <div className="text-right">
                          {row[col.key] || empty}
                        </div>
                      )}

                    {col.type == COLUMN_TYPE.BADGE &&
                      [
                        COLUMN_TYPE.LINK,
                        COLUMN_TYPE.CURRENCY,
                        COLUMN_TYPE.DATE,
                      ].includes(col.type) == false && (
                        <div className="text-left">
                          {(col.formatter && col.formatter(row)) || empty}
                        </div>
                      )}

                    {!col?.type && <span>{row[col.key] || empty}</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <select
          className="border border-gray-300 rounded-md p-2"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size} per page
            </option>
          ))}
        </select>

        <div className="flex gap-3 items-center">
          <Button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span>
            Page {page} of {totalPages}
          </span>
          <Button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
