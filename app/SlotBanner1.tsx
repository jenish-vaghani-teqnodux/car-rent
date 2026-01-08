import { useRouter } from "next/navigation";
import React from "react";

const SlotBanner1: React.FC<ISlotBannerProps> = ({
  slotId,
  carId,
  title,
  description,
  className = "",
  isLoading = false,
  image_url,
  flip,
  showButton = false,
}) => {
  const router = useRouter();

  const handleClickRental = () => {
    router.push(`payment/${carId}`);
  };
  return (
    <>
      {isLoading ? (
        <div className="bg-card flex w-full h-[232px] sm:h-[360px] justify-center items-center rounded-xl overflow-hidden">
          <img
            src="/assets/skeleton/gallery.svg"
            className="w-[60px] h-[60px] animate-pulse"
          />
        </div>
      ) : (
        <div
          className={`relative w-full h-[232px] sm:h-[360px] rounded-xl overflow-hidden px-6 py-8 bg-[#54A6FF] ${className}`}
        >
          <svg className="absolute inset-0 w-full h-full opacity-85 pointer-events-none">
            <defs>
              <linearGradient
                id="gridGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>

            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="2"
              />
            </pattern>

            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <div className="min-w-[250px] sm:w-[272px] space-y-4 relative z-10">
            <h2 className="text-lg sm:text-xl md:text-3xl text-white font-semibold">
              {title || "Rent a car easily with the best price"}
            </h2>
            <span className="text-sm sm:text-[16px] text-white block">
              {description ||
                "Providing cheap car rental services and safe and comfortable facilities."}
            </span>
            {showButton && (
              <button
                className="btn-primary h-11 w-[120px] text-white size-[18px] font-medium rounded-md cursor-pointer mt-4"
                onClick={handleClickRental}
              >
                Rental Car
              </button>
            )}
          </div>

          <img
            src={image_url}
            className={`absolute -right-1 lg:right-20 -bottom-6 w-[406px] h-40 sm:h-60 object-contain z-5 ${
              flip ? "scale-x-[-1]" : "scale-x-100"
            }`}
          />
        </div>
      )}
    </>
  );
};

export default SlotBanner1;
