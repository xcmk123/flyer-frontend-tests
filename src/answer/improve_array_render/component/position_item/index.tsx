import { ChangeEventHandler, memo } from "react";
import useStore, { getPostionByIndex } from "../../store";

interface IPropsPositionItem {
  index: number,
  x: number,
  y: number
}

const PositionItem = memo(({index, x, y}: IPropsPositionItem) => {
  const postion = getPostionByIndex(index)
  const handleChangePosition = useStore((state: any) => state.onChangePosition)
  const handleChangeResize = useStore((state: any) => state.onResizeMode)
  const handleRemoveBoxes = useStore((state: any) => state.onRemoveBoxes)

  const onXinputChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    handleChangePosition(index, {
      x: parseInt(e.target.value) || 0,
      y: postion.y,
    })
  }

  const onYInputChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    handleChangePosition(index, {
      x: postion.x,
      y: parseInt(e.target.value) || 0,
    })
  }
  return (
    <li style={{ marginBottom: 15 }}>
      Box {index + 1} - x:
      <input 
        type="text" 
        size={4} 
        value={x} 
        onChange={onXinputChange} 
      />, y:{' '}
      <input 
        type="text" 
        size={4}
        value={y} 
        onChange={onYInputChange} 
      />
      <button 
        className="p-2"
        onClick={() => handleChangeResize(index)}
      >
        Resize
      </button>
      <button 
        className="p-2"
        onClick={() => handleRemoveBoxes(index)}
      >
        Remove
      </button>
    </li>
  );
})
export default PositionItem