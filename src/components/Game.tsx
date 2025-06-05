import { useEffect } from 'react'
import { useGameStore } from '../store'
import GameCanvas from './GameCanvas'
import MiniGraph from './MiniGraph'

export default function Game() {
  const tick = useGameStore((s) => s.tick)
  const money = useGameStore((s) => s.money)

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000)
    const save = localStorage.getItem('energy-city-save')
    if (save) {
      try {
        const data = JSON.parse(save)
        useGameStore.getState().load(data)
      } catch (e) { console.error(e) }
    }
    return () => clearInterval(interval)
  }, [tick])

  return (
    <div className="p-4 space-y-4">
      <div className="flex space-x-4">
        <div>Money: ${money}</div>
      </div>
      <GameCanvas />
      <MiniGraph data={[money % 50, (money + 10) % 50, (money + 20) % 50]} />
    </div>
  )
}
