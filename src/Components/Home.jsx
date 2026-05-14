import { useEffect, useState } from "react";

const Home = () => {
  const [featured, setfeatured] = useState([]);

  useEffect(() => {
    async function featuredData() {
      let fItem = await fetch("https://fakestoreapi.com/products");
      let fData = await fItem.json();
      setfeatured(fData.slice(0, 4));
    }
    featuredData();
  }, []);

  return (
    <div className="font-sans m-10">
      {/* -----------------Accessories part------------------------ */}
      <div className="relative w-full h-[400px] overflow-hidden ">
        <img
          src="Headphones.png"
          alt="Headphones"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black">
          <h1 className="text-4xl font-bold mb-2">Accessories Sale</h1>
          <p className="text-lg mb-4">Up to 50% off on selected items</p>
          <h2 className="text-xl font-semibold">
            Explore the latest in audio tech
          </h2>
          <p className="text-sm mt-2">
            Headphones, earbuds & more engineered for style and sound.
          </p>
        </div>
      </div>

      {/* -------------------featured products part-------------------- */}
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((f) => {
            return (
              <li
                key={f.id}
                className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition duration-300"
              >
                <img
                  src={f.image}
                  alt=""
                  className="h-40 w-full object-contain mb-4"
                />

                <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                  {f.title}
                </h3>

                <p className="text-lg font-bold text-blue-600">${f.price}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ---------------OUR PRODUCTION PART---------------- */}
      <div className="bg-gray-100 py-12 px-6">
        <h4 className="text-2xl font-bold text-center mb-10">OUR PRODUCTION</h4>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img
              src="Mill.png"
              alt=""
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">KNITTING MILL</h3>
            <p className="text-gray-600 text-sm">
              Our expert teaming brings together textile has been manufacturing
              world class knit textiles for the last 50 years in Toronto,
              Canada.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img
              src="Dye.png"
              alt=""
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">DYE HOUSE</h3>
            <p className="text-gray-600 text-sm">
              Milling textiles is the highest quality operation. Dyeing is only
              the first part of our process.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img
              src="Sewing.png"
              alt=""
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">SEWING FACTORY</h3>
            <p className="text-gray-600 text-sm">
              Located next to the mill and dye house, our entire operation is
              where art and manufacture connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
