"use client";
import CarDetailCart from "./CarDetailCart";
import CarGallery from "./CarGallery";

const DetailPage = () => {
  return (
    <>
      <div className="p-8 w-full">
        <div className="flex flex-col sm:flex-row  gap-6">
          {/* slot banner / car gallery */}
          <div className="w-[492px] lg:w-full">
            <CarGallery />
          </div>

          {/* car detail card */}
          <div className="w-[492px] lg:w-full">
            <CarDetailCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
