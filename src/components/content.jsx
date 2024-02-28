import { css } from "../../styled-system/css";
import { hstack, stack, center } from "../../styled-system/patterns";
// import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const getAllRestaurantsUrl = import.meta.env.VITE_API_RESTAURANTS;

function Content() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["restaurantData"],
    queryFn: async () => {
      try {
        const response = await axios.get(getAllRestaurantsUrl);
        return response.data.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(getAllRestaurantsUrl);
  //       if (Array.isArray(response.data.data)) {
  //         setRestaurants(response.data.data);
  //         // console.log("Restaurant data:", response.data.data);
  //       } else {
  //         console.error("Response data is not an array:", response.data.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getData();
  // }, []);

  return (
    <div className={center({ height: "100vh", flexDirection: "column" })}>
      <div>{isFetching ? "Updating..." : ""}</div>
      {data.map((item) => (
        <div
          key={item.id}
          className={css({
            border: "3px solid #000000",
            boxShadow: "4px 4px 0px #000000",
            borderRadius: "13px",
            padding: 6,
            margin: 6,
            maxWidth: "388px",
          })}
        >
          <div className={stack({ gap: 4 })}>
            <span className={hstack({ gap: 4, fontWeight: "bold" })}>
              {item.attributes.Name}
            </span>
            <blockquote className={css({ fontSize: "17px" })}>
              {item.attributes.Description[0].children[0].text}
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
