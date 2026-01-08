"use client";

import LocationSkeleton from "@/components/shared/LocationSkeleton";
import DatePickerField from "@/components/ui/date-picker/DatePickerField";
import SelectWrapper from "@/components/ui/select/SelectWrapper";
import TimePickerField from "@/components/ui/time-picker/TimePickerField";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";
import { dashboardData } from "@/lib/mockData";
import { useFilter } from "@/context/FilterContext";

dayjs.extend(customParseFormat);

const RideLocationCard: React.FC<IRideLocationCardProps> = ({
  title,
  isLoading,
  data,
  onChange,
}) => {
  const { isFilterOpen } = useFilter();

  const [rideLocationDetails, setRideLocationDetails] =
    useState<IrideLocationDetails>(
      data || {
        location: "",
        date: "",
        time: "",
      }
    );

  const updateDetails = (field: keyof IrideLocationDetails, value: string) => {
    setRideLocationDetails((prev) => {
      const updated = { ...prev, [field]: value };
      return updated;
    });
  };

  useEffect(() => {
    onChange?.(rideLocationDetails);
  }, [rideLocationDetails]);

  const dateObj = rideLocationDetails?.date
    ? dayjs(rideLocationDetails.date, "DD-MM-YYYY")
    : null;

  const timeObj = rideLocationDetails?.time
    ? dayjs(rideLocationDetails.time, "hh:mm A")
    : null;

  return (
    <div
      className={`bg-card w-full h-full sm:h-[154px] ${
        !isFilterOpen ? "px-8" : "px-6"
      }  2xl:px-8 py-4 rounded-xl`}
    >
      {isLoading ? (
        <LocationSkeleton />
      ) : (
        <>
          <div className="flex items-center gap-2">
            <img
              src="/assets/icons/mark.svg"
              className="w-4 h-4 animate-pulse"
            />
            <h2 className="text-heading text-[16px] font-medium">{title}</h2>
          </div>
          <div className="mt-2 flex flex-col sm:flex-row gap-4 2xl:gap-6 w-full justify-between ">
            {/* location */}
            <div className="w-full">
              <h1 className="text-heading text-[16px] font-medium">
                Locations
              </h1>
              <SelectWrapper
                placeholder="Select your city"
                options={dashboardData.locationOptions}
                value={rideLocationDetails?.location || ""}
                onChange={(value) => {
                  updateDetails("location", value);
                }}
              />
            </div>

            <span className="border-devider hidden sm:block w-0.5 h-[90px] border-r-2" />
            {/* date */}
            <div className="w-full">
              <h1 className="text-heading text-[16px] font-medium">Date</h1>
              <DatePickerField
                placeholder="Select your date"
                value={dateObj}
                onChange={(newDate) => {
                  updateDetails(
                    "date",
                    newDate ? newDate.format("DD-MM-YYYY") : ""
                  );
                }}
              />
            </div>

            <span className="border-devider hidden sm:block w-0.5 h-[90px] border-r-2" />

            {/* time */}
            <div className="w-full">
              <h1 className="text-heading text-[16px] font-medium">Time</h1>
              <TimePickerField
                placeholder="Select your time"
                value={timeObj}
                onChange={(newTime) => {
                  updateDetails(
                    "time",
                    newTime ? newTime.format("hh:mm A") : ""
                  );
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RideLocationCard;
