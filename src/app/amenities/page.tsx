import Image from "next/image";

const AmenitiesPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[1200px]">
              <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                Our Amenities
              </h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Add your amenities here */}
                <div className="dark:bg-dark rounded-lg bg-white/5 p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Free WiFi
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark text-base">
                    High-speed internet access throughout the property
                  </p>
                </div>
                <div className="dark:bg-dark rounded-lg bg-white/5 p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Air Conditioning
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark text-base">
                    Climate control for your comfort
                  </p>
                </div>
                <div className="dark:bg-dark rounded-lg bg-white/5 p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Fully Equipped Kitchen
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark text-base">
                    Everything you need to prepare your meals
                  </p>
                </div>
                {/* Add more amenities as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesPage;
