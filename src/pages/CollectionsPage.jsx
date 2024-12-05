import { useEffect, useState } from "react";

import MainNavbar from "../components/MainNavbar";
import SearchBar from "../components/SearchBar";
import FooterContent from "../components/FooterContent";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Link,
} from "@nextui-org/react";

function CollectionsPage() {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [findedData, setFindedData] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const searching = (e) => {
    setSearchQuery(e.target.value);

    const results = data.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFindedData(results);
  };

  return (
    <>
      <MainNavbar />
      <main className="px-5">
        <section className="mt-10">
          <Input
            label="Search"
            radius="lg"
            placeholder="Type to search..."
            classNames={{
              inputWrapper: ["bg-white"],
            }}
            startContent={<i className="bi bi-search"></i>}
            value={searchQuery}
            onChange={searching}
          />
          <div className="grid grid-cols-2 gap-3 mt-10">
            {(searchQuery ? findedData : data)?.map((data) => {
              return (
                <>
                  <Link href={`/details/${data.id}`}>
                    <Card key={data.id} className="w-[43vw] h-56">
                      <CardHeader className="absolute flex-col items-end">
                        <div className="bg-black py-1 px-3 text-center rounded-full">
                          <p className="text-tiny font-normal text-white">
                            {data.price}
                          </p>
                        </div>
                      </CardHeader>
                      <CardBody className="flex">
                        <img src={data.image} className="w-full" />
                      </CardBody>
                      <CardFooter className="absolute bottom-0 bg-transparent backdrop-blur-xl justify-between">
                        <div>
                          <h1 className="text-lg font-medium text-black">
                            {data.name}
                          </h1>
                          <p className="text-xs font-normal text-black opacity-80">
                            Click for details
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="bg-black px-5 py-10 mt-20">
        <FooterContent />
      </footer>
    </>
  );
}

export default CollectionsPage;
