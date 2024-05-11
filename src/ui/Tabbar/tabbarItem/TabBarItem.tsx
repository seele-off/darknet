import React from 'react';

import clsx from 'clsx';

import style from './TabBarItem.module.css';

export interface TabBarItemProps {
  children?: React.ReactNode;
  label: string;
  activeTab?: string;
}

const TabBarItem: React.FC<TabBarItemProps> = ({
  children,
  label,
  activeTab,
  ...attrs
}) => {
  const classes = clsx(
    style.tabBarItem,
    { [style.active]: activeTab === label },
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default TabBarItem;
