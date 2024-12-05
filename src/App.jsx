// import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MainNavbar from "./components/MainNavbar";
// import SearchBar from "./components/SearchBar";
import NewCollection from "./components/NewCollection";
import PopularSwiper from "./components/PopularSwiper";
import Newsletter from "./components/Newsletter";

import { Button, Link } from "@nextui-org/react";
// import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

function App() {
  return (
    <>
      <MainNavbar />
      <header className="bg-gray-100 h-screen">
        <br></br>
        <div className="text-wrap text-center px-5 mt-5">
          <h1 className="text-5xl font-semibold text-black">FSHN</h1>
          <p className="text-base font-medium text-black opacity-80 mt-4">
            Explore your favorite product, 1000 products available!
          </p>
          <img src="/fashion 48.png" className="w-full" />
          <Button size="lg" className="bg-black text-md font-medium text-white">
            Explore Now!
          </Button>
        </div>
      </header>
      <main className="px-5">
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
              Our popular collections
            </h1>
            <p className="text-base font-normal text-black opacity-80">
              Explore our popular collections!
            </p>
          </div>
          <PopularSwiper />
        </section>
        <section className="flex justify-center items-center mt-20">
          <Newsletter />
        </section>
      </main>
      <footer className="bg-black px-5 mt-20 py-10">
        <div>
          <h1 className="text-2xl font-semibold text-white">Starfy</h1>
          <p className="text-sm font-normal text-white opacity-80">
            Place for searching cloths.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-10 mt-10">
          <div className="flex flex-col">
            <h1 className="text-md font-medium text-white">Category</h1>
            <Link href="" className="text-sm text-white opacity-80 mt-2">
              Women
            </Link>
            <Link href="" className="text-sm text-white opacity-80 mt-3">
              Men
            </Link>
            <Link href="" className="text-sm text-white opacity-80 mt-3">
              New
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="text-md font-medium text-white">Terms</h1>
            <Link href="" className="text-sm text-white opacity-80 mt-2">
              Refund
            </Link>
            <Link href="" className="text-sm text-white opacity-80 mt-3">
              Cancel Order
            </Link>
            <Link href="" className="text-sm text-white opacity-80 mt-3">
              New
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="text-md font-medium text-white">Contact Us</h1>
            <Link href="" className="text-sm text-white opacity-80 mt-2">
              WhatsApp
            </Link>
            <Link href="" className="text-sm text-white opacity-80 mt-3">
              abhiassastudio@gmail.com
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-5">
            <Link href="" className="text-sm text-white opacity-80 mt-2">
              <i className="bi bi-facebook text-lg"></i>
            </Link>
            <Link href="" className="text-sm text-white opacity-80 mt-2">
              <i className="bi bi-instagram text-lg"></i>
            </Link>
            <Link href="" className="text-sm text-white opacity-80 mt-2">
              <i className="bi bi-tiktok text-lg"></i>
            </Link>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-xs font-normal text-white opacity-80">
            &copy; 2024 ABHIASSA STUDIO
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
