import { create } from 'zustand'

export type Tile = {
  buildingId: string | null
}

export interface GameState {
  grid: Tile[]
  money: number
  tick: () => void
  load: (data: Partial<GameState>) => void
}

const size = 10
const emptyGrid: Tile[] = Array.from({ length: size * size }, () => ({ buildingId: null }))

export const useGameStore = create<GameState>((set, get) => ({
  grid: emptyGrid,
  money: 1000,
  tick: () => {
    // update per tick, e.g., energy, money etc
    const state = get()
    set({ money: state.money + 1 })
    localStorage.setItem('energy-city-save', JSON.stringify({ grid: state.grid, money: state.money }))
  },
  load: (data) => set(data)
}))

export const gridSize = size
