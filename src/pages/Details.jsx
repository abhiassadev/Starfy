import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import MainNavbar from "../components/MainNavbar";

import {
  Breadcrumbs,
  BreadcrumbItem,
  Chip,
  Button,
  Link,
  CircularProgress,
} from "@nextui-org/react";

import MainNavbar from "../components/MainNavbar";
import FooterContent from "../components/FooterContent";

function Details() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <CircularProgress aria-label="Loading..." />
      </div>
    );
  }

  const product = data.find((data) => data.id === parseInt(id));

  return (
    <>
      <MainNavbar />
      <main className="px-5">
        <br></br>
        <section>
          <div>
            <Breadcrumbs>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/collections">Collections</BreadcrumbItem>
              <BreadcrumbItem href={`/details/${product.id}`}>
                Details
              </BreadcrumbItem>
              <BreadcrumbItem>{product.name}</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <div className="border border-slate-300 rounded-2xl mt-10">
            <img src={product.image} />
          </div>
          <div className="mt-5">
            <h1 className="text-xl font-medium text-black">{product.name}</h1>
            <p className="text-sm font-normal text-black opacity-80 mt-3">
              Description : {product.description}
            </p>
            <p className="text-sm font-normal text-black opacity-80 mt-2">
              Stock : {product.stock}
            </p>
            <p className="text-sm font-normal text-black mt-2">
              Price : {product.price}
            </p>
          </div>
          <div className="flex justify-center items-center w-full mt-5 mb-10">
            <Link
              href={`https://wa.me/6283133793060?text=${product.name}`}
              className="w-full"
            >
              <Button className="bg-black w-full text-base font-medium text-white">
                Buy
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-black px-5 py-10">
        <FooterContent />
      </footer>
    </>
  );
}

export default Details;
