/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';

import clsx from 'clsx';

import style from './TabBar.module.css';
import { TabBarItemProps } from './tabbarItem/TabBarItem';
import TabBarNav from './TabBarNav';

interface TabBarProps {
  children: React.ReactNode;
  className?: string;
  activeTab: string;
  setActiveTab: (label: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({
  children, className = '', activeTab, setActiveTab,
}) => {
  const getChildrenLabels = (children: React.ReactNode): string[] => React.Children.toArray(children)
    .filter(React.isValidElement)
    .map((child) => (child.props as any).label);

  const handleChangeActiveTab = (label: string) => {
    setActiveTab(label);
  };

  const renderTabs = () => {
    const childrenLabels = getChildrenLabels(children);

    return childrenLabels.map((navLabel) => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        className={clsx({ [style.active]: activeTab === navLabel })}
        onChangeActiveTab={handleChangeActiveTab}
      />
    ));
  };

  const classes = clsx(style.tabBar, className);

  return (
    <div className={classes}>
      <div className={style.tabBarNav}>{renderTabs()}</div>
      <div className={style.tabContainer}>
        {React.Children.map(
          children,
          (child) => (React.isValidElement(child) ? React.cloneElement(child, { activeTab } as TabBarItemProps) : null),
        )
        }
      </div>
    </div>
  );
};

export default TabBar;
