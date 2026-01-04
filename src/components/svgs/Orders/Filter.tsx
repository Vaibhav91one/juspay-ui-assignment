import * as React from "react";
const Filter = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="#1c1c1c"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M19.625 14a.624.624 0 0 1-.625.625H9a.625.625 0 1 1 0-1.25h10a.624.624 0 0 1 .625.625m2.5-4.375H5.875a.625.625 0 0 0 0 1.25h16.25a.624.624 0 1 0 0-1.25m-6.25 7.5h-3.75a.624.624 0 1 0 0 1.25h3.75a.624.624 0 1 0 0-1.25"
        />
    </svg>
);
export default Filter;
