import React, { FC, ReactNode } from 'react';
import { Sidebar } from '../ui/sidebar';

export interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
