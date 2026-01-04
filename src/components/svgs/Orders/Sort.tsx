import * as React from "react";
const Sort = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 20 20"
    fill="#1c1c1c"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.192 13.308a.625.625 0 1 0-.884.884l2.5 2.5a.625.625 0 0 0 .884 0l2.5-2.5a.626.626 0 0 0-.884-.884L6.25 15.366z"
    />
    <path
      d="M5.625 3.75v12.5a.625.625 0 1 0 1.25 0V3.75a.625.625 0 1 0-1.25 0m10.183 2.942a.626.626 0 0 0 .884-.884l-2.5-2.5a.625.625 0 0 0-.884 0l-2.5 2.5a.625.625 0 1 0 .884.884l2.058-2.058z"
    />
    <path
      d="M14.375 16.25V3.75a.625.625 0 1 0-1.25 0v12.5a.625.625 0 1 0 1.25 0"
    />
  </svg>
);
export default Sort;
