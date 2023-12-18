import { useEffect, useState, useRef } from "react";

export const useFetch = (callback: any, ...params: any) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState<any>();

  interface RefProp {
    [key: string]: any;
  }
  const cache = useRef({} as RefProp);
  debugger;

  useEffect(() => {
    let ignore = false;
    let key = `${callback.name}-${JSON.stringify(params)}`;
    setIsPending(true);
    let getData = async () => {
      try {
        debugger;
        let fetchedData = await callback(...params);
        cache.current[key] = fetchedData;
        if (!ignore) {
          setData(fetchedData);
        }
      } catch {
        // error
      }
      finally {
        setIsPending(false);
        console.log(data);
      }
    };
    if (cache.current[key]) {
      debugger;
      try {
        const data = cache.current[key];
        setData(data);
      } finally {
        setIsPending(false);
      }
    } else {
      getData();
    }
    return () => {
      ignore = true;
    }
  }, [callback]);

  return { isPending, data };
};
