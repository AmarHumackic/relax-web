"use client";

const NewsLatterBox = () => {
  return (
    <div className="shadow-three relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black">
        Subscribe to receive future updates
      </h3>
      <p className="border-body-color/25 text-body-color mb-11 border-b pb-11 text-base leading-relaxed">
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare
        massa quis lectus.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-stroke text-body-color focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke text-body-color focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-primary shadow-submit hover:bg-primary/90 mb-5 flex w-full cursor-pointer items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
        />
        <p className="text-body-color text-center text-base leading-relaxed">
          No spam guaranteed, So please don't send any spam mail.
        </p>
      </div>
      <div>
        <span className="absolute top-7 left-2">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;
