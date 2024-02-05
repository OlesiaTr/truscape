import React, { FC, ReactNode } from 'react';

export interface Props {
  headers: ReactNode;
  children: ReactNode;
}

const SummaryTable: FC<Props> = ({ headers, children }) => {
  return (
    <table className="table-auto w-full border-separate border-spacing-0 ">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr]:bg-white">
        {children}
      </tbody>
    </table>
  );
};

export default SummaryTable;
