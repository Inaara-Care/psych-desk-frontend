'use client';

import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import clsx from 'clsx';

interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  onRowClick?: (row: T) => void;
}

export function Table<T extends { id?: string | number }>({ 
  columns, 
  data, 
  selectable = false,
  onRowSelect,
  onRowClick
}: TableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...data]);
    }
    setSelectAll(!selectAll);
    onRowSelect && onRowSelect(selectAll ? [] : [...data]);
  };

  const handleSelectRow = (row: T) => {
    const isSelected = selectedRows.some(selectedRow => 
      selectedRow.id === row.id
    );
    
    let newSelectedRows: T[];
    if (isSelected) {
      newSelectedRows = selectedRows.filter(selectedRow => 
        selectedRow.id !== row.id
      );
    } else {
      newSelectedRows = [...selectedRows, row];
    }
    
    setSelectedRows(newSelectedRows);
    onRowSelect && onRowSelect(newSelectedRows);
  };

  const isRowSelected = (row: T) => {
    return selectedRows.some(selectedRow => selectedRow.id === row.id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            {selectable && (
              <th className="py-3 px-4 text-left">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
              </th>
            )}
            {columns.map((column, index) => (
              <th 
                key={index} 
                className={clsx(
                  "py-3 px-4 text-left text-sm font-medium text-gray-500",
                  column.className
                )}
              >
                {column.header}
              </th>
            ))}
            <th className="py-3 px-4 text-right"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={clsx(
                "border-b border-gray-200 hover:bg-gray-50",
                onRowClick && "cursor-pointer"
              )}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {selectable && (
                <td className="py-4 px-4">
                  <input
                    type="checkbox"
                    checked={isRowSelected(row)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleSelectRow(row);
                    }}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </td>
              )}
              {columns.map((column, colIndex) => {
                const cellContent = typeof column.accessor === 'function' 
                  ? column.accessor(row)
                  : row[column.accessor];
                  
                return (
                  <td 
                    key={colIndex} 
                    className={clsx(
                      "py-4 px-4 text-sm",
                      column.className
                    )}
                  >
                    {cellContent}
                  </td>
                );
              })}
              <td className="py-4 px-4 text-right">
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}