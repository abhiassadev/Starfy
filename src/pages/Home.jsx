import { useEffect, useState } from "react";

import MainNavbar from "../components/MainNavbar";
import Newsletter from "../components/Newsletter";
import FooterContent from "../components/FooterContent";

import { Button, Link, CircularProgress } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const newCollections = data.filter((data) => data.category.includes("New"));
  const popularCollections = data.filter((data) =>
    data.category.includes("Popular")
  );
  console.log(popularCollections);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <CircularProgress aria-label="Loading..." />
      </div>
    );
  }

  return (
    <>
      <MainNavbar />
      <header className="bg-gray-100 h-screen">
        <br></br>
        <div className="text-wrap text-center px-5 mt-5">
          <div>
            <h1 className="text-5xl font-semibold text-black">
              Welcome To Dreamour
            </h1>
            <p className="text-base font-medium text-black opacity-80 mt-4">
              Explore your favorite product, 1000 products available!
            </p>
          </div>
          <div>
            <img src="/fashion 48.png" className="w-full" />
            <Link href="/collections">
              <Button
                size="lg"
                className="bg-black text-md font-medium text-white"
              >
                Explore Now!
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="px-5">
        <section id="newCollections">
          <div className="text-wrapper text-center mt-5">
            <h1 className="text-2xl font-semibold text-black">
              Our new collection
            </h1>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {newCollections.map((product) => {
              return (
                <>
                  <Card key={product.id}>
                    <CardHeader className="absolute flex-col items-end">
                      <div className="bg-black py-2 px-5 text-center rounded-full">
                        <p className="text-sm font-medium text-white">
                          {product.price}
                        </p>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <img src={product.image} />
                    </CardBody>
                    <CardFooter className="absolute bottom-0 bg-transparent backdrop-blur-xl justify-between">
                      <div>
                        <h1 className="text-xl font-semibold text-black">
                          {product.name}
                        </h1>
                        <p className="text-md font-normal text-black opacity-80">
                          New collection!
                        </p>
                      </div>
                      <Link href={`/details/${product.id}`}>
                        <Button className="bg-black font-medium text-white">
                          Buy
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </>
              );
            })}
          </div>
          <div className="mt-5">
            <Link href="/collections">
              <Button className="bg-black font-medium text-white">
                View more
              </Button>
            </Link>
          </div>
        </section>
        <section id="popularCollections">
          <div className="mt-16 mb-5">
            <h1 className="text-2xl font-semibold text-black">
              Our popular collections
            </h1>
            <p className="text-base font-normal text-black opacity-80">
              Explore our popular collections!
            </p>
            <div className="flex flex-col gap-10 mt-10">
              {popularCollections.map((product) => {
                return (
                  <>
                    <Card key={product.id}>
                      <CardHeader className="absolute flex-col items-end">
                        <div className="bg-black py-2 px-5 text-center rounded-full">
                          <p className="text-sm font-medium text-white">
                            {product.price}
                          </p>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <img src={product.image} />
                      </CardBody>
                      <CardFooter className="absolute bottom-0 bg-transparent backdrop-blur-xl justify-between">
                        <div>
                          <h1 className="text-xl font-semibold text-black">
                            {product.name}
                          </h1>
                          <p className="text-md font-normal text-black opacity-80">
                            New collection!
                          </p>
                        </div>
                        <Link href={`/details/${product.id}`}>
                          <Button className="bg-black font-medium text-white">
                            Buy
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center mt-20">
          <Newsletter />
        </section>
      </main>
      <footer id="footer" className="bg-black px-5 mt-20 py-10">
        <FooterContent />
      </footer>
    </>
  );
}

export default Home;
