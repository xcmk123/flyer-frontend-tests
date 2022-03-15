import { useState, useEffect, useRef } from "react";

interface IPropsVirtualizedList {
  numberToRender: number
  mockIdsReturns: string[]
  mockDataReturn: IMockDataReturn[]
}

interface IMockDataReturn {
  id: string
  text: string
}

function debounce(func: Function, delay: number = 1000) {
  let timeout: any;
  return function executedFunc(...args: any) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, delay);
  };
}

export default function VirtualizedList(props: IPropsVirtualizedList) {
  const [ state, setState ] = useState<any>([])
  const [ load, setLoad ] = useState(true)
  const isMounted = useRef(false)
  const startNumber = useRef(0)
  const endNumber = useRef(15)
  const stepNumber = useRef(5)

  const onScroll = (e: any) => {
    const el = e.target;
    if ( el.scrollTop + el.clientHeight === el.scrollHeight ) {
      setLoad(true)
    }
  }

  const getData = (load: boolean) => {
    if ( load && endNumber.current < props.numberToRender ) {
      if ( isMounted.current === false && state.length === 0 ) {
        isMounted.current = true
      }
      else {
        startNumber.current = endNumber.current
        if ( endNumber.current + stepNumber.current > props.numberToRender ) {
          endNumber.current = props.numberToRender
        }
        else {
          endNumber.current = endNumber.current + stepNumber.current
        }
      }
      const data = props.mockIdsReturns.slice(startNumber.current, endNumber.current).map((id: string) => {
        return props.mockDataReturn.find((el: {id: string, text: string }) => el.id === id);
      })
      setState([...state, ...data])
    }
  };

  useEffect(() => {
    getData(load)
    setLoad(false)
  }, [load])

  useEffect(() => {
    const list = document.getElementById("link");
    list?.addEventListener('scroll', debounce(onScroll, 150)); 
    return () => {
      list?.removeEventListener('scroll', onScroll)
    }
  }, []);

  return (
    <ul className="overflow-y-scroll max-h-96 border" id="link">
      {
        state.map((item: IMockDataReturn) => 
          <li className="p-1" key={item.id}>
          - {item.id  || 'not found!'}
          </li>
        ) 
      }
    </ul>
  );
};
