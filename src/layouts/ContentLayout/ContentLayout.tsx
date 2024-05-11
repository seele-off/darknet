import { FC, ReactNode } from 'react';

import style from './ContentLayout.module.css';

type ContentLayoutProps = {
  children: ReactNode;
};

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => (
  <main className={style.contentWrapper}>
    {children}
  </main>
);

export default ContentLayout;
