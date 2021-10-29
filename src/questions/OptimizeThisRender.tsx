import { useState } from 'react';

// DO NOT MODIFY THIS
const mockDataReturn = Array.from({ length: 100_000 }).map((_, index) => {
  const id = `${index + 1}`;
  return {
    id,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit ut quaera.',
  };
});
// DO NOT MODIFY THIS
const mockIdsReturns = Array.from({ length: 100_000 }).map((_, index) => `${index + 1}`);

export default function OptimizeThisRender() {
  const [numberToRender, setNumberToRender] = useState(100);

  return (
    <div className="max-w-lg mx-auto">
      <p className="text-center">
        Render this list takes too long if "number to render" is too high (100.000 probably will
        hang), see in code and optimize this.
      </p>
      <div className="mt-4 mb-2">
        number to render:{' '}
        <select
          value={numberToRender}
          onChange={(e) => setNumberToRender(parseInt(e.target.value))}
        >
          <option value={100}>100</option>
          <option value={1_000}>1.000</option>
          <option value={10_000}>10.000</option>
          <option value={10_000}>100.00</option>
        </select>
      </div>
      <ul className="overflow-y-scroll max-h-96 border">
        {mockIdsReturns.slice(0, numberToRender).map((id) => {
          const item = mockDataReturn.find((el) => el.id === id);
          return (
            <li className="p-1" key={id}>
              - {item?.text || 'not found!'}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
