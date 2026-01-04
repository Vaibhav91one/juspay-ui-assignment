interface HistoryProps {
  width?: number | string
  height?: number | string
  className?: string
}

const History = ({ width = 28, height = 28, className }: HistoryProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ width, height }}>
            <path d="M20.875 14a6.875 6.875 0 1 1-13.75 0 6.875 6.875 0 0 1 13.75 0" fill="#1c1c1c" fill-opacity=".1" />
            <path d="M14.625 10.25v3.396l2.822 1.693a.626.626 0 0 1-.644 1.072l-3.125-1.875a.63.63 0 0 1-.303-.536v-3.75a.625.625 0 1 1 1.25 0M14 6.5a7.46 7.46 0 0 0-5.306 2.2 32 32 0 0 0-1.569 1.706V9a.625.625 0 0 0-1.25 0v3.125a.625.625 0 0 0 .625.625h3.125a.625.625 0 1 0 0-1.25H7.828a34 34 0 0 1 1.75-1.92 6.25 6.25 0 1 1 .129 8.965.626.626 0 0 0-.86.91A7.5 7.5 0 1 0 14 6.5" fill="#1c1c1c" />
        </svg>
    )
}

export default History