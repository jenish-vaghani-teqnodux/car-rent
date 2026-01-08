import { useRouter } from "next/navigation";

const SlotBanner2: React.FC<ISlotBannerProps> = ({
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
          className={`relative w-full h-[232px] sm:h-[360px] rounded-xl overflow-hidden px-6 py-8 bg-[#3563E9] ${className}`}
        >
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <pattern
                id="chevronPattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="0,0 40,0 80,80 40,80"
                  fill="rgba(255,255,255,0.15)"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#chevronPattern)" />
          </svg>

          <div className="min-w-[250px] sm:w-[272px] space-y-4 relative z-10">
            <h2 className="text-lg sm:text-xl md:text-3xl text-white font-semibold">
              {title || ""}
            </h2>

            <span className="text-sm sm:text-[16px] text-white block">
              {description || ""}
            </span>

            {showButton && (
              <button
                className="h-11 w-[120px] bg-[#54A6FF] hover:bg-[#3F8FE0] text-white size-[18px] font-medium rounded-md cursor-pointer mt-4"
                onClick={handleClickRental}
              >
                Rental Car
              </button>
            )}
          </div>

          <img
            src={image_url}
            className={`absolute -right-1 xl:right-20 -bottom-6 w-[406px] h-40 sm:h-60 object-contain z-5 ${
              flip ? "scale-x-[-1]" : "scale-x-100"
            }`}
          />
        </div>
      )}
    </>
  );
};

export default SlotBanner2;
