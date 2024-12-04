// import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MainNavbar from "./components/MainNavbar";
import SearchBar from "./components/SearchBar";

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
            Searching your favorite product, 1000 products available!
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
        <SearchBar />
        <Input
          label="Search"
          placeholder="Type to search..."
          startContent={<i className="bi bi-search text-sm text-black"></i>}
          classNames={{
            inputWrapper: ["bg-white"],
          }}
        />
        <div className="flex flex-col gap-10 mt-10">
          <Card>
            <CardHeader className="absolute flex-col items-end">
              <div className="bg-black py-2 px-5 text-center rounded-full">
                <p className="text-sm font-medium text-white">$50</p>
              </div>
            </CardHeader>
            <CardBody>
              <img src="/fashion 24.png" />
            </CardBody>
            <CardFooter className="absolute bottom-0 bg-transparent backdrop-blur-xl justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black">Fashion</h1>
                <p className="text-md font-normal text-black opacity-80">
                  New collection!
                </p>
              </div>
              <Button className="bg-black font-medium text-white">Buy</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="absolute flex-col items-end">
              <div className="bg-black py-2 px-5 text-center rounded-full">
                <p className="text-sm font-medium text-white">$50</p>
              </div>
            </CardHeader>
            <CardBody>
              <img src="/fashion 25.png" />
            </CardBody>
            <CardFooter className="absolute bottom-0 bg-transparent backdrop-blur-xl justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black">Fashion</h1>
                <p className="text-md font-normal text-black opacity-80">
                  New collection!
                </p>
              </div>
              <Button className="bg-black font-medium text-white">Buy</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}

export default App;
