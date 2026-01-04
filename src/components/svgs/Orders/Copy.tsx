import * as React from "react";
const Copy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 9.5a.5.5 0 0 1-.5.5H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5M10 7H6a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1m3.5-4v10.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.266a2.995 2.995 0 0 1 4.468 0H12.5a1 1 0 0 1 1 1M6 4h4a2 2 0 1 0-4 0m6.5-1h-1.672c.114.321.172.66.172 1v.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V4c0-.34.058-.679.172-1H3.5v10.5h9z"
      fill="#1c1c1c"
    />
  </svg>
);
export default Copy;
