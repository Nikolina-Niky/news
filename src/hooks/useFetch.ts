import { useEffect, useState } from "react";

export const useFetch = (callback: any) => {
  const [isPending, setIsPendng] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        let fetchedData = await callback();
        setData(fetchedData);
      } catch {
        // error
      }
    };
    setIsPendng(true);
    getData();
    setIsPendng(false);
  }, [callback]);

  return { isPending, data };
};
