import { useRef, useCallback, useState, ChangeEventHandler } from 'react';
import Draggable, { DraggableProps } from 'react-draggable';
import styles from './index.module.css';

const BOXES_COUNT = 10;
const BOXES_PER_ROW = 5;

function BoxItem({ text, ...rest }: Partial<DraggableProps> & { text: string | number }) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} {...rest}>
      <div className={styles.Box} ref={nodeRef}>
        Box {text}
      </div>
    </Draggable>
  );
}

function PositionItem({
  x,
  y,
  index,
  onXInputChange,
  onYInputChange,
}: {
  x: number;
  y: number;
  index: number;
  onXInputChange: ChangeEventHandler<HTMLInputElement>;
  onYInputChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <li style={{ marginBottom: 15 }}>
      Box {index + 1} - x: <input type="text" size={4} value={x} onChange={onXInputChange} />, y:{' '}
      <input type="text" size={4} value={y} onChange={onYInputChange} />
    </li>
  );
}

export default function Content() {
  const [positions, setPositions] = useState(
    Array.from({ length: BOXES_COUNT }).map((_, index) => ({
      x: 100 + (150 + 100) * (index % BOXES_PER_ROW),
      y: 20 + (150 + 50) * Math.floor(index / BOXES_PER_ROW),
    })),
  );

  const handleChangePosition = useCallback(
    (index: number, position: { x: number; y: number }) => {
      const temp = [...positions];
      temp[index] = position;
      setPositions(temp);
    },
    [positions],
  );

  return (
    <div className={styles.Content}>
      <div className={styles.Slider}>
        <ul className="p-4">
          {positions.map(({ x, y }, index) => {
            return (
              <PositionItem
                key={index}
                x={x}
                y={y}
                index={index}
                onXInputChange={(e) =>
                  handleChangePosition(index, {
                    x: parseInt(e.target.value) || 0,
                    y: positions[index].y,
                  })
                }
                onYInputChange={(e) =>
                  handleChangePosition(index, {
                    x: positions[index].x,
                    y: parseInt(e.target.value) || 0,
                  })
                }
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.Main}>
        {positions.map((position, index) => {
          return (
            <BoxItem
              key={index}
              bounds="parent"
              position={position}
              onDrag={(_, { x, y }) => {
                handleChangePosition(index, { x, y });
              }}
              text={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}
