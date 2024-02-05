import React, { FC, ReactNode } from 'react';

export interface Props {
  cardLabel: string;
  children: ReactNode;
}

const DashboardCard: FC<Props> = ({ cardLabel, children }) => {
  return (
    <div className="border border-solid rounded bg-gray-100">
      <p className="p-5 text-gray-900 text-xl font-medium">{cardLabel}</p>
      <div>{children}</div>
    </div>
  );
};

export default DashboardCard;
