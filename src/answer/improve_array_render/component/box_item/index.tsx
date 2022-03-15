import { useEffect, useRef, memo, useMemo } from "react";
import Draggable from "react-draggable";
import styles from './index.module.css';
import useStore, { getPostionByIndex, getResizeStateByIndex } from "../../store";

interface IPropsBoxItem {
  index: number
}
const BoxItem = memo(({index}: IPropsBoxItem) => {
  const nodeRef = useRef(null);
  const position = getPostionByIndex(index)
  const handleChangePostion = useStore((state: any) => state.onChangePosition)
  const scaleStyle = useMemo(() => ({ resize: 'both', overflow: 'auto', backgroundColor: 'red' }),[])
  const isReize = getResizeStateByIndex(index)
  
  useEffect(() => {
    console.log("render", index)
  }, [position])
  
  return (
    <Draggable 
      nodeRef={nodeRef} 
      bounds="parent"
      position={position}
      onDrag={(_, { x, y }) => {
        handleChangePostion(index, { x, y });
      }}
      disabled={isReize}
    >
      <div 
        className={styles.Box}
        style={isReize && scaleStyle as any}
        ref={nodeRef}
      >
        Box {index + 1}
      </div>
    </Draggable>
  );
})
export default BoxItem