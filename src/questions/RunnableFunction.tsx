import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


// const sumVl = number1 => number2 => number1 + number2
export default function RunnableFunction() {
  const sum = (number1: number, number2: number) =>  number1 + number2
  const sumCurring = (number1: number) => (number2: number) => number1 + number2
  return (
    <div className="max-w-lg mx-auto">
      <p className="text-red-50">
        Make this function runnable. Write this function in it component and run in "console.log"
      </p>
      <SyntaxHighlighter language="javascript" style={dark}>
        {
          `
            ${sum(5,2)}
            ${sumCurring(5)(2)}
          `
        }
      </SyntaxHighlighter>
    </div>
  );
}
