import React, { SVGProps } from 'react';
export function VeryHappy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 14 14'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path d='M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13'></path>
        <path d='M4.75 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7 11a3.5 3.5 0 0 0 3.5-3.5h-7A3.5 3.5 0 0 0 7 11'></path>
      </g>
    </svg>
  );
}
