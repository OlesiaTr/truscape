import React, { FC, ReactElement } from 'react';

export interface Props {
  children: ReactElement;
}

const Layout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
