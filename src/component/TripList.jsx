import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCallback } from "react";
//style
import "./TripList.css";

function TripList() {
  // const [trips, setTrips] = useState([]);
  // console.log(trips);

  const [url, setUrl] = useState("http://localhost:3000/trips");
  const euroBtn = useCallback(() => {
    setUrl(url + "?loc=Europe");
  }, []);
  const allBtn = useCallback(() => {
    setUrl(url);
  }, []);

  //custom hook fetch
  const { data: trips, isPending, error } = useFetch(url);

  // const fetchTrips = useCallback(async () => {
  //   const req = await fetch(url);
  //   const res = await req.json();
  //   setTrips(res);
  // }, [url]);

  // useEffect(() => {
  //   fetchTrips();
  // }, [fetchTrips]);

  return (
    <div className="trip-list">
      <h1>TripList</h1>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips &&
          trips.map((eachtrip) => {
            return (
              <li key={eachtrip.title}>
                <h2> {eachtrip.title}</h2>
                <p>price: {eachtrip.price}</p>
              </li>
            );
          })}
      </ul>

      <div className="filters">
        <button onClick={euroBtn}>Europe</button>

        <button onClick={allBtn}>All trips</button>
      </div>
    </div>
  );
}

export default TripList;
