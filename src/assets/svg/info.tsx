/* eslint-disable max-len */
import { FC } from 'react';

import { SvgProps } from '@interfaces/svg';

import { EColor } from '@enums/enums';

const InfoSVG: FC<SvgProps> = (
  {
    width = 20,
    height = 20,
    fill = EColor.white,
    className,
  },
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    fill={fill}
    enableBackground="new 0 0 330 330"
    version="1.1"
    width={width}
    height={height}
    viewBox="0 0 330 330"
    xmlSpace="preserve"
    className={className}
  >
    <path d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"></path>
    <path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"></path>
  </svg>
);

export default InfoSVG;
