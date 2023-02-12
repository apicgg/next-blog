import { PropsWithChildren } from 'react';
import MainNavigation from './MainNavigation';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
