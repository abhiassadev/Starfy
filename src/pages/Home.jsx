import MainNavbar from "../components/MainNavbar";
import NewCollection from "../components/NewCollection";
import PopularSwiper from "../components/PopularSwiper";
import Newsletter from "../components/Newsletter";
import FooterContent from "../components/FooterContent";

import { Button, Link } from "@nextui-org/react";

function Home() {
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
          <Link href="/collections">
            <Button
              size="lg"
              className="bg-black text-md font-medium text-white"
            >
              Explore Now!
            </Button>
          </Link>
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
            <NewCollection />
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
          </div>
          <PopularSwiper />
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
