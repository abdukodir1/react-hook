import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const req = await fetch(url);

        //erro status
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const res = await req.json();
        setData(res);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error }; // same {data: data}
}
