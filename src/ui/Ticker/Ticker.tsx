import { FC, ReactNode } from 'react';

import styles from './Ticker.module.css';

type TickerProps = {
  children: ReactNode;
};

const Ticker: FC<TickerProps> = ({ children }) => (
  <div className={styles.ticker}>

    <div className={styles.tickerContent}>
      {children}
    </div>
  </div>
);

export default Ticker;
