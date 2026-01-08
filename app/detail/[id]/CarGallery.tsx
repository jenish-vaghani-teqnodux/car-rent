import SlotBanner2 from "@/app/SlotBanner2";
import React, { useState } from "react";

const CarGallery: React.FC<ICarGalleryProps> = ({ isLoading, data }) => {
  const [selectedImage, setSelectedImage] = useState(data[0]);

  return (
    <>
      {/* Main Banner */}
      <div className="flex w-full h-[232px] sm:h-[360px] justify-center items-center rounded-xl overflow-hidden">
        <img
          src={selectedImage}
          alt="Selected Car View"
          className="w-full h-full"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-5 pt-4 overflow-x-auto pb-4 pl-2">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="shrink-0 w-24 h-16 sm:w-[148px] sm:h-[124px] rounded-lg bg-white flex items-center justify-center"
              >
                <img
                  src="/assets/skeleton/gallery.svg"
                  alt="loading-thumbnail"
                  className="w-6 h-6 object-contain rounded-lg"
                />
              </div>
            ))
          : data.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer shrink-0 w-24 h-16 sm:w-[148px] sm:h-[124px] rounded-lg overflow-hidden ${
                  selectedImage === item ? "ring-3 ring-[#3563E9] p-1.5" : ""
                }`}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item || "/images/no-image-available.png"}
                  alt={`car-view-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default CarGallery;
