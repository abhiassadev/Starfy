import Swiper from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Chip } from "@nextui-org/react";

function PopularSwiper() {
  const swiper = new Swiper(".swiper", {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  return (
    <>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="relative text-center">
              <img src="/fashion 30.png" />
              <Chip className="absolute bottom-24 left-5 bg-black text-sm font-medium text-white p-5">
                $30
              </Chip>
              <Chip className="bg-black text-base font-semibold text-white min-w-52 p-5">
                Fashion 30
              </Chip>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="relative text-center">
              <img src="/fashion 31.png" />
              <Chip className="absolute bottom-24 left-5 bg-black text-sm font-medium text-white p-5">
                $31
              </Chip>
              <Chip className="bg-black text-base font-semibold text-white min-w-52 p-5">
                Fashion 31
              </Chip>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="relative text-center">
              <img src="/fashion 32.png" />
              <Chip className="absolute bottom-24 left-5 bg-black text-sm font-medium text-white p-5">
                $32
              </Chip>
              <Chip className="bg-black text-base font-semibold text-white min-w-52 p-5">
                Fashion 32
              </Chip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularSwiper;
