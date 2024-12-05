import { Card, Input } from "@nextui-org/react";

function Newsletter() {
  return (
    <>
      <Card className="bg-black flex justify-center items-center h-64 w-full">
        <div className="text-wrap text-center">
          <h1 className="text-2xl font-semibold text-white">
            Join Newsletter!
          </h1>
          <p className="text-base font-normal text-white opacity-80 mb-5">
            Get updated collection infomation!
          </p>
          <Input
            placeholder="Type email address..."
            startContent={<i className="bi bi-envelope-fill"></i>}
            classNames={{
              inputWrapper: ["bg-white"],
            }}
          />
        </div>
      </Card>
    </>
  );
}

export default Newsletter;
