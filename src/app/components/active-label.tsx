import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface Props {
  children: ReactNode;
  status: Status;
}

const StatusLabel: FC<Props> = ({ children, status }) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-3xl text-sm font-medium py-1 px-3.5',
        status === Status.Active && 'text-green-700 bg-green-100',
        status === Status.NotActive && 'text-red-700 bg-red-100',
        status === Status.Pending && 'text-orange-700 bg-orange-100',
        status === Status.Suspended && 'text-blue-700 bg-blue-100',
      )}
    >
      <div className="bg-current rounded-full mr-2 w-1 h-1" />
      {children}
    </div>
  );
};

export default StatusLabel;
