import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react-corso-api.netlify.app/.netlify/functions/holiday";

const Holiday = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [data, setData] = useState("");

  /* const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      // console.log(res.data.data);
      const vacation = await res.data.data;
      setHoliday(vacation);
    } catch (error) {
      setIsError(true);
    } finally {
      console.log(holiday);
    }
    setIsLoading(false);
  }; */
  const [selected, setSelected] = useState(1);

  //funzione per scelgiere prossimo valore di selected e prossima vacanza
  const nextHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue + 1 === data.data.length) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };

  //Return Funzionale per controllare valore
  const prevHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue - 1 < 0) {
        return data.data.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //Return Condizionale per controllare di aver risolto la Promise
  if (data.success) {
    console.log(data);
    return (
      <>
        {data.data.length > 0 ? (
          <SingleHoliday
            {...data.data[selected]}
            next={nextHoliday}
            prev={prevHoliday}
          />
        ) : (
          <h4>No Vacanze</h4>
        )}
      </>
    );
  } else {
    //Se non ho soddisfatto promise vuol dire che sto caricando
    return <h2> Loading... </h2>;
  }
};

//   if (isLoading) {
//     return <Loading />;
//   }
//   if (isError) {
//     return <ErrorComponent />;
//   }
//   return <></>;
// };
// const Loading = () => {
//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>Loading...</h2>
//     </div>
//   );
// };

// const ErrorComponent = () => {
//   return (
//     <div>
//       <h2>Error...</h2>
//     </div>
//   );
// };

export default Holiday;
