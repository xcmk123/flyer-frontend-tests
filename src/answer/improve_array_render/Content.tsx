import { Fragment } from 'react';
import styles from './index.module.css';
import BoxItem from './component/box_item';
import PositionItem from './component/position_item';
import useStore, { getPostions } from './store';

export default function Content() {
  const positions = getPostions()
  const handleAddBoxes = useStore((state: any) => state.onAddBoxes)
  return (
    <div className={styles.Content}>
      <div className={styles.Slider}>
        <ul className="p-4">
          {
            positions.map(({ x, y }: { x: number, y: number }, index: number) => {
              return (
                <Fragment key={index}>
                  <PositionItem 
                    x={x}
                    y={y}
                    index={index}
                  />
                </Fragment>
              )
            })
          }
        </ul>
        <button onClick={() => handleAddBoxes()}>Add</button>
      </div>
      <div className={styles.Main}>
        {positions.map((_: any, index: number) => {
          return (
            <Fragment key={index}>
              <BoxItem index={index} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
