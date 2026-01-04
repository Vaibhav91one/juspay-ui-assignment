interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M10.875 7.75v12.5h-3.75a.625.625 0 0 1-.625-.625V8.375a.625.625 0 0 1 .625-.625z" fill="#1c1c1c" fill-opacity=".1" />
            <path d="M20.875 7.125H7.125a1.25 1.25 0 0 0-1.25 1.25v11.25a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25V8.375a1.25 1.25 0 0 0-1.25-1.25m-13.75 8.75h1.25a.625.625 0 1 0 0-1.25h-1.25v-1.25h1.25a.625.625 0 1 0 0-1.25h-1.25v-1.25h1.25a.625.625 0 1 0 0-1.25h-1.25v-1.25h3.125v11.25H7.125zm13.75 3.75H11.5V8.375h9.375z" fill="#1c1c1c" />
        </svg>
    )
}

export default Sidebar