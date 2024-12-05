import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const id = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  //   const product = data?.filter((data) => data.id.includes(parseInt(id)));
  //   console.log(product);

  return <></>;
}

export default Details;
