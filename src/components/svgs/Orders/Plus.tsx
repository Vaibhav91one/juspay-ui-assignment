import * as React from "react";
const Plus = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="#1c1c1c"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14.625 8.375a.625.625 0 1 0-1.25 0v5h-5a.625.625 0 1 0 0 1.25h5v5a.625.625 0 1 0 1.25 0v-5h5a.625.625 0 1 0 0-1.25h-5z"
        />
    </svg>
);
export default Plus;
