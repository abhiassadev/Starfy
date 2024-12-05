import { Link } from "@nextui-org/react";

function FooterContent() {
  return (
    <>
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
    </>
  );
}

export default FooterContent;
