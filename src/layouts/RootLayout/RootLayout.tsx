import { FC, ReactNode } from 'react';

type MainLayout = {
  children: ReactNode;
};

const RootLayout: FC<MainLayout> = ({ children }) => (
  <>
    {children}
  </>
);

export default RootLayout;
