import { SVGProps } from 'react';
export function Normal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' {...props}>
      <g
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path d='M4.5 9.5h5m-2.5 4a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13'></path>
        <path d='M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5'></path>
      </g>
    </svg>
  );
}
