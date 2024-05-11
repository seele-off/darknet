/* eslint-disable max-len */
import { FC } from 'react';

import { SvgProps } from '@interfaces/svg';

import { EColor } from '@enums/enums';

const ArrowSVG: FC<SvgProps> = (
  {
    width = 30,
    height = 30,
    fill = EColor.white,
    className,
  },
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill={fill}
      d="M14.29 5.707a1 1 0 00-1.415 0L7.988 10.6a2 2 0 000 2.828l4.89 4.89a1 1 0 001.415-1.414l-4.186-4.185a1 1 0 010-1.415l4.182-4.182a1 1 0 000-1.414z"
    ></path>
  </svg>
);

export default ArrowSVG;
