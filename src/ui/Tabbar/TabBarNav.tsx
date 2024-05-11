import React from 'react';

import clsx from 'clsx';

import style from './TabBarNav.module.css';

interface TabBarNavProps {
  navLabel?: string;
  className?: string;
  onChangeActiveTab: (label: string) => void;
}

const TabBarNav: React.FC<TabBarNavProps> = ({
  navLabel = 'Tab',
  className = '',
  onChangeActiveTab,
}) => {
  const classes = clsx(className, style.navItem);

  return (
    <button
      type="button"
      className={classes}
      onClick={() => onChangeActiveTab(navLabel)}
    >
      {navLabel}
    </button>
  );
};

export default TabBarNav;
