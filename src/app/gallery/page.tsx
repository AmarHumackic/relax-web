import PhotoGallery from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[1200px]">
              <h1 className="mb-8 text-center text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                Photo Gallery
              </h1>
              <PhotoGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
