import Amenities from "@/components/Amenities";

const AmenitiesPage = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#FCFCFC] pt-[160px] pb-16 md:pb-20 lg:pb-28">
      <div className="container px-4">
        {/* Amenities Section */}
        <Amenities />
      </div>
    </section>
  );
};

export default AmenitiesPage;
