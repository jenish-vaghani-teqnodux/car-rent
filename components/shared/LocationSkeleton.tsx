import LineSkeleton from "./LineSkeleton";

export default function LocationSkeleton() {
  return (
    <div className="p-2 w-full h-full flex flex-col justify-between">
      {/* top line */}
      <div className="flex items-center gap-2">
        <LineSkeleton variant="primary" className="w-[72px]! sm:w-[116px]!" />
      </div>

      {/* 3 columns */}
      <div className="mt-2 flex flex-col sm:flex-row gap-8 2xl:gap-6 w-full justify-between ">
        {/* location */}
        <div className="w-full space-y-2">
          <LineSkeleton variant="primary" className="w-auto" />
          <LineSkeleton variant="secondary" className="w-auto" />
        </div>

        {/* date */}
        <div className="w-full space-y-2">
          <LineSkeleton variant="primary" className="w-auto" />
          <LineSkeleton variant="secondary" className="w-auto" />
        </div>

        {/* time */}
        <div className="w-full space-y-2">
          <LineSkeleton variant="primary" className="w-auto" />
          <LineSkeleton variant="secondary" className="w-auto" />
        </div>
      </div>
    </div>
  );
}
