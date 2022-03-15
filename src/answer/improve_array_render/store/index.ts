import create from 'zustand'

const BOXES_COUNT = 10;
const BOXES_PER_ROW = 5;

const useStore = create((set: any) => ({
  positions: Array.from({ length: BOXES_COUNT }).map((_, index) => ({
    x: 100 + (150 + 100) * (index % BOXES_PER_ROW),
    y: 20 + (150 + 50) * Math.floor(index / BOXES_PER_ROW),
  })),
  resizes: Array.from({ length: BOXES_COUNT }).map((_, index) =>  false),
  onChangePosition: 
    (index: number, position: { x: number; y: number }) => 
      set((state: any) => 
      ({ 
        positions: [
          ...state.positions.slice(0, index),
          position,
          ...state.positions.slice(index + 1)
        ] 
      })),
  onResizeMode: (index: number) => {
    set((state: any) => ({
      resizes: [
        ...state.resizes.slice(0, index), 
        !state.resizes[index],
        ...state.resizes.slice(index + 1)
      ]
    }))
  },
  onAddBoxes: () => {
    set((state: any) => ({
    positions: [
      ...state.positions,
      {
        x: 100 + (150 + 100) * ((state.positions.length) % BOXES_PER_ROW),
        y: 20 + (150 + 50) * Math.floor((state.positions.length) / BOXES_PER_ROW),
      }
    ]
  }))
  },
  onRemoveBoxes: (index: number) => {
    set((state: any) => ({
      positions: [
        ...state.positions.slice(0, index),
        ...state.positions.slice(index + 1)
      ]
    }))
  } 
}))

export const getPostionByIndex = (index: number) => useStore((state: any) => state.positions[index])
export const getPostions = () => useStore((state: any) => state.positions)
export const getResizeStateByIndex = (index: number) => useStore((state: any) => state.resizes[index])

export default useStore