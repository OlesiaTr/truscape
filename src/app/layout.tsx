import React, { ReactNode } from 'react';
import './globals.css';
import { plusJakartaSans } from './fonts';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
