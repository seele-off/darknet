/* eslint-disable max-len */
import { FC } from 'react';

import { SvgProps } from '@interfaces/svg';

import { EColor } from '@enums/enums';

const CloseSVG: FC<SvgProps> = (
  {
    width = 25,
    height = 25,
    fill = EColor.black,
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
    <g>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6"
      ></path>
    </g>
  </svg>
);

export default CloseSVG;
