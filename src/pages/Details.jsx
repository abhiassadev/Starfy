import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Breadcrumbs,
  BreadcrumbItem,
  Button,
  Input,
  CircularProgress,
} from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

import MainNavbar from "../components/MainNavbar";
import FooterContent from "../components/FooterContent";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const product = data.find((data) => data.id === parseInt(id));

  const checkout = async (e) => {
    e.preventDefault();

    const order_id = product.id + Date.now();
    const product_id = product.id;
    const product_name = product.name;
    const price = product.price;
    const product_quantity = quantity;
    const data = {
      order_id,
      product_id,
      product_name,
      price,
      product_quantity,
    };

    const response = await fetch("https://dreamour-api.vercel.app/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);

    window.snap.pay(result);
    // const message = `
    // DATA PESANAN BARU

    // Nama Produk: ${product.name}
    // Data Pemesan
    // Nama: ${name}
    // Nomor Handphone: ${phone}
    // Kuantitas: ${quantity}
    // `;

    // window.location.href = `https://wa.me/6283133793060?text=${encodeURIComponent(
    //   message
    // )}`;
  };

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
              Description: {product.description}
            </p>
            <p className="text-sm font-normal text-black opacity-80 mt-2">
              Stock: {product.stock}
            </p>
            <p className="text-sm font-normal text-black mt-2">
              Price: {product.price}
            </p>
          </div>
          <div className="flex justify-center items-center w-full mt-5 mb-10">
            <Button
              onPress={onOpen}
              className="bg-black w-full text-base font-medium text-white"
            >
              Buy
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex-col">
                      <h1 className="text-lg font-medium text-black">
                        {product.name}
                      </h1>
                      <p className="text-sm font-normal text-black">
                        Price : {product.price}
                      </p>
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={checkout}>
                        {/* <Input
                          type="hidden"
                          name="product_name"
                          value={product.name}
                          onChange={(e) => setProductName(e.target.value)}
                        /> */}
                        <Input
                          label="Your Name"
                          placeholder="Input your name"
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                          label="Phone Number"
                          placeholder="62 831 xxxx xxxx"
                          type="number"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          classNames={{
                            inputWrapper: ["mt-5"],
                          }}
                        />
                        <Input
                          label="Quantity"
                          placeholder="Input quantity"
                          type="number"
                          name="quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          classNames={{
                            inputWrapper: ["mt-5"],
                          }}
                        />
                        <Button
                          type="submit"
                          className="bg-black w-full text-base font-medium text-white mt-5 mb-5"
                        >
                          Checkout
                        </Button>
                      </form>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
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
