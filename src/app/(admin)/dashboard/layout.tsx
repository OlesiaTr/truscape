import React, { FC, ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  sales: ReactNode;
}

const Layout: FC<Props> = ({ children, sales }) => {
  return (
    <div>
      {children}
      <main>
        <div>{sales}</div>
      </main>
    </div>
  );
};

export default Layout;
