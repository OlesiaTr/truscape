import React, { FC } from 'react';

export interface Props {
  error: Error;
}

const ErrorComponent: FC<Props> = ({ error }) => {
  return (
    <div>
      <p>Something went wrong on the dashboard page</p>
    </div>
  );
};

export default ErrorComponent;
