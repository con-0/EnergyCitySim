import { useEffect, useRef } from 'react'
import { useGameStore, gridSize } from '../store'

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const grid = useGameStore((s) => s.grid)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const size = canvas.width / gridSize
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = '#555'
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        ctx.strokeRect(x * size, y * size, size, size)
      }
    }
    grid.forEach((tile, i) => {
      if (tile.buildingId) {
        const x = (i % gridSize) * size
        const y = Math.floor(i / gridSize) * size
        ctx.fillStyle = '#0f0'
        ctx.fillRect(x + 2, y + 2, size - 4, size - 4)
      }
    })
  }, [grid])

  return <canvas ref={canvasRef} width={500} height={500} />
}
