import PhotoGallery from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#FCFCFC] pt-[160px] pb-16 md:pb-20 lg:pb-28">
      <div className="container px-4">
        <h1 className="text-primary mb-8 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Photo Gallery
        </h1>
        <div className="mx-auto max-w-[1200px]">
          <PhotoGallery />
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
