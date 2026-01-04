interface LocationDotProps {
  x: number // Percentage from left (0-100)
  y: number // Percentage from top (0-100)
}

export function LocationDot({ x, y }: LocationDotProps) {
  return (
    <div
      className="absolute w-[6px] h-[6px] rounded-full bg-black dark:bg-purple-dark border border-white transition-colors"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}

