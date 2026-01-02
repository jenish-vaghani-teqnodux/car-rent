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

const CarGallery = () => {
  return (
    <>
      <SlotBanner2 {...demoDetail} />
      <div className="flex justify-center gap-5 pt-6 overflow-x-auto">
        {views.map((item, index) => (
          <img
            src={item || "/images/no-image-available.png"}
            key={index}
            className="w-[148px] h-[124px] rounded-lg"
          />
        ))}
      </div>
    </>
  );
};

export default CarGallery;
