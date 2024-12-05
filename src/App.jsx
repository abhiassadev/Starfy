// import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MainNavbar from "./components/MainNavbar";
import SearchBar from "./components/SearchBar";
import NewCollection from "./components/NewCollection";
import PopularSwiper from "./components/PopularSwiper";

import { Button, Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

function App() {
  return (
    <>
      <header className="bg-gray-100 h-screen">
        <MainNavbar />
        <div className="text-wrap text-center mt-5 px-5">
          <h1 className="text-5xl font-semibold text-black">FSHN</h1>
          <p className="text-base font-medium text-black opacity-80 mt-4">
            Explore your favorite product, 1000 products available!
          </p>
          <img src="/fashion 48.png" className="w-full" />
          <Button
            // color="warning"
            size="lg"
            className="bg-black text-md font-medium text-white"
          >
            Explore Now!
          </Button>
        </div>
      </header>
      <main className="px-5">
        {/* <Input
          label="Search"
          placeholder="Type to search..."
          startContent={<i className="bi bi-search text-sm text-black"></i>}
          classNames={{
            inputWrapper: ["bg-white"],
          }}
        /> */}
        <section>
          <div className="text-wrapper text-center mt-5">
            <h1 className="text-2xl font-semibold text-black">
              Our new collection
            </h1>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <NewCollection />
          </div>
          <div className="mt-5">
            <Button className="bg-black font-medium text-white">
              View more
            </Button>
          </div>
        </section>
        <section>
          <div className="mt-16 mb-5">
            <h1 className="text-2xl font-semibold text-black">
              Our popular collection
            </h1>
            <p className="text-base font-normal text-black opacity-80">
              Explore our popular collection!
            </p>
          </div>
          <PopularSwiper />
        </section>
      </main>
    </>
  );
}

export default App;
