// function Success() {}

// fu

function Success() {
  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <section>
          <h1 className="text-2xl font-semibold text-black">
            Pembayaran berhasil!
          </h1>
          <p className="text-base font-normal text-black opacity-80">
            Pesanan akan segera di proses!
          </p>
          <a
            href="/collections"
            className="text-base font-normal text-blue-700"
          >
            Kembali
          </a>
        </section>
      </main>
    </>
  );
}

export default Success;
