import React, { FC, ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div></div>;
};

export default Layout;
