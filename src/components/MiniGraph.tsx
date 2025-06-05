import { useRef } from 'react'

interface Props {
  data: number[]
  color?: string
}

export default function MiniGraph({ data, color = '#0f0' }: Props) {
  const ref = useRef<SVGSVGElement>(null)
  const w = 100
  const h = 40
  const max = Math.max(...data, 1)

  return (
    <svg ref={ref} width={w} height={h} className="border border-gray-700">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={data
          .map((d, i) => `${(i / (data.length - 1)) * w},${h - (d / max) * h}`)
          .join(' ')}
      />
    </svg>
  )
}
