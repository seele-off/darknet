import {
  CSSProperties, FC, HTMLAttributeAnchorTarget, ReactNode,
} from 'react';

import NextLink from 'next/link';

import clsx from 'clsx';

import styles from './Link.module.css';

type LinkProps = {
  path: string;
  query?: { [id: string]: string } | string;
  children: ReactNode;
  className?: string;
  onClick?: ((e: any) => void) | undefined;
  scroll?: boolean;
  draggable?: boolean;
  attributeTitle?: string;
  shallow?: boolean;
  style?: CSSProperties;
  target?: HTMLAttributeAnchorTarget;
};

const Link: FC<LinkProps> = ({
  path,
  query,
  children,
  className,
  onClick,
  scroll = true,
  draggable = false,
  attributeTitle,
  shallow,
  style,
  target,
}) => {
  const currentStyles = clsx(styles.link, className);

  return <NextLink href={{ pathname: path, query }} scroll={scroll} shallow={shallow} >
    <a
      className={currentStyles}
      onClick={onClick}
      draggable={draggable}
      title={attributeTitle}
      style={style}
      target={target}
    >
      {children}
    </a>
  </NextLink>;
};

export default Link;
