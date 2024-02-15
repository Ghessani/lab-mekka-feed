import React, { SVGProps } from 'react';
export function Sad(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <g
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
      >
        <path
          fill='currentColor'
          d='M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1'
        ></path>
        <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10'></path>
        <path d='M7.5 15.5s1.5-2 4.5-2s4.5 2 4.5 2'></path>
      </g>
    </svg>
  );
}
