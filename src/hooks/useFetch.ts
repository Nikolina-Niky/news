import { useEffect, useState, useRef } from "react";

export const useFetch =<T, R>(callback: (args: R)=> Promise<T>, args: R)  => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState<Awaited<T | []>>([]);


  interface RefProp {
    [key: string]:Awaited<T | []>;
  }
  const cache = useRef({} as RefProp);

  useEffect(() => {
    let ignore = false;
    let key = `${callback.name}-${JSON.stringify(args)}`;
    setIsPending(true);
    let getData = async () => {
      try {
        let fetchedData = await callback(args);
        cache.current[key] = fetchedData;
        if (!ignore) {
          setData(fetchedData);
        }
      } catch {
        // error
      }
      finally {
        setIsPending(false);
      }
    };
    if (cache.current[key]) {
      try {
        const cachedData = cache.current[key];
        setData(cachedData);
      } finally {
        setIsPending(false);
      }
    } else {
      getData();
    }
    return () => {
      ignore = true;
    }
  }, [callback, args]);

  return { isPending, data };
};
