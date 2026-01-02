import SlotBanner2 from "@/app/SlotBanner2";
import React from "react";

const demoDetail = {
  slotId: "f6b2b828-a5c8-4925-8a7a-065aff9535c6",
  title: "Sports car with the best design and acceleration",
  description:
    "Safety and comfort while driving a futuristic and elegant sports car",
  isLoading: false,
  image_url: "/temp/nissan_gt_r.png",
  flip: true,
  showButton: false,
};

const views = [
  "/images/f6b2b828-a5c8-4925-8a7a-065aff9535c6-view-1.png",
  "/images/f6b2b828-a5c8-4925-8a7a-065aff9535c6-view-2.png",
  "/images/f6b2b828-a5c8-4925-8a7a-065aff9535c6-view-3.png",
];

const CarGallery: React.FC<ICarGalleryProps> = ({ isLoading }) => {
  return (
    <>
      {/* Main Banner */}
      <SlotBanner2 {...demoDetail} isLoading={isLoading} />

      {/* Thumbnails */}
      <div className="flex gap-5 pt-4 overflow-x-auto pb-4">
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
          : views.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-24 h-16 sm:w-[148px] sm:h-[124px] rounded-lg flex items-center justify-center"
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
