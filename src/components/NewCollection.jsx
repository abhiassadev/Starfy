import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Link,
} from "@nextui-org/react";

function NewCollection() {
  return (
    <>
      <Card>
        <CardHeader className="absolute flex-col items-end">
          <div className="bg-black py-2 px-5 text-center rounded-full">
            <p className="text-sm font-medium text-white">$24</p>
          </div>
        </CardHeader>
        <CardBody>
          <img src="/fashion 24.png" />
        </CardBody>
        <CardFooter className="absolute bottom-0 bg-transparent backdrop-blur-xl justify-between">
          <div>
            <h1 className="text-xl font-semibold text-black">Fashion 24</h1>
            <p className="text-md font-normal text-black opacity-80">
              New collection!
            </p>
          </div>
          <Link href="/collections">
            <Button className="bg-black font-medium text-white">Buy</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="absolute flex-col items-end">
          <div className="bg-black py-2 px-5 text-center rounded-full">
            <p className="text-sm font-medium text-white">$25</p>
          </div>
        </CardHeader>
        <CardBody>
          <img src="/fashion 25.png" />
        </CardBody>
        <CardFooter className="absolute bottom-0 bg-transparent backdrop-blur-xl justify-between">
          <div>
            <h1 className="text-xl font-semibold text-black">Fashion 25</h1>
            <p className="text-md font-normal text-black opacity-80">
              New collection!
            </p>
          </div>
          <Link href="/collections">
            <Button className="bg-black font-medium text-white">Buy</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default NewCollection;
