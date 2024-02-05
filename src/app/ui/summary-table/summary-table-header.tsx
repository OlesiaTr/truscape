import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

export interface Props {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}

const SummaryTableHeader: FC<Props> = ({ align = 'left', children }) => {
  return (
    <th
      className={clsx(
        ' py-1.5 ml-5 text-white text-xs first-of-type:rounded-l-sm last-of-type:rounded-r-sm ',
        `text-${align}`,
        '[&:nth-child(1)]:text-white [&:nth-child(1)]:bg-gray-900',
        '[&:nth-child(2)]:text-gray-900 [&:nth-child(2)]:bg-purple-200','[&:nth-child(3)]:text-gray-900 [&:nth-child(3)]:bg-lime-200',
      )}
    >
      {children}
    </th>
  );
};

export default SummaryTableHeader;
