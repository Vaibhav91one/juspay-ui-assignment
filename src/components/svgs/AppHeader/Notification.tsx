interface NotificationProps {
  width?: number | string
  height?: number | string
  className?: string
}

const Notification = ({ width = 28, height = 28, className }: NotificationProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width, height }}>
            <path d="M20.25 19H7.75a.626.626 0 0 1-.537-.937c.514-.891 1.162-3.14 1.162-5.938a5.625 5.625 0 0 1 11.25 0c0 2.798.648 5.047 1.164 5.938a.626.626 0 0 1-.539.937" fill="#1c1c1c" fill-opacity=".1" />
            <path d="M21.328 17.745c-.433-.747-1.078-2.86-1.078-5.62a6.25 6.25 0 0 0-12.5 0c0 2.76-.645 4.873-1.079 5.62a1.25 1.25 0 0 0 1.079 1.88h3.188a3.125 3.125 0 0 0 6.124 0h3.188a1.25 1.25 0 0 0 1.078-1.88M14 20.875a1.875 1.875 0 0 1-1.767-1.25h3.534A1.875 1.875 0 0 1 14 20.875m-6.25-2.5C8.352 17.341 9 14.944 9 12.125a5 5 0 1 1 10 0c0 2.816.647 5.213 1.25 6.25z" fill="#1c1c1c" />
        </svg>
    )
}

export default Notification