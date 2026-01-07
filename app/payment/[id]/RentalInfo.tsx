import React, { useState } from "react";
import PaymentCart from "./PaymentCart";
import { cityOptions, dateOptions, timeOptions } from "@/lib/constant";
import RentalInfoSkeleton from "@/components/shared/RentalInfoSkeleton";

const paymentInfo: React.FC<IPaymentInfoProps> = ({
  paymentInfo,
  setPaymentInfo,
  isLoading,
}) => {
  return (
    <PaymentCart
      heading={{
        title: "Rental Info",
        description: "Please select your rental date",
        step: {
          currentStep: 2,
          totalSteps: 4,
        },
      }}
      isLoading={isLoading}
      children={
        <>
          <div className="space-y-8">
            {isLoading ? (
              <RentalInfoSkeleton />
            ) : (
              <>
                {/* pick-up */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/mark.svg"
                      className="w-4 h-4 animate-pulse"
                    />
                    <h2 className="text-heading text-[16px] font-medium">
                      Pick - Up
                    </h2>
                  </div>
                  <div className="flex justify-between gap-8 flex-col lg:flex-row">
                    {/* location */}
                    <div className="space-y-4 w-full">
                      <div className="space-y-2">
                        <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                          Locations
                        </h1>
                        <div className="relative w-full">
                          <select
                            name="locations"
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                pickup: {
                                  ...paymentInfo.pickup,
                                  location: e.target.value,
                                },
                              })
                            }
                            value={paymentInfo.pickup.location}
                            className=" appearance-none cursor-pointer h-14 w-full pl-6 pr-12 bg-page text-[#94A3B8] rounded-xl outline-none focus:outline-none focus:ring-0 hover:bg-[#CED3DA]! focus:bg-[#f6f7f9]!"
                          >
                            <option value="" disabled>
                              Select your city
                            </option>
                            {cityOptions.map((item, index) => (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                            <svg
                              className="h-5 w-5 text-[#94A3B8]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* time */}
                      <div className="space-y-2">
                        <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                          Time
                        </h1>
                        <div className="relative w-full">
                          <select
                            name="time"
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                pickup: {
                                  ...paymentInfo.pickup,
                                  time: e.target.value,
                                },
                              })
                            }
                            value={paymentInfo.pickup.time}
                            className=" appearance-none cursor-pointer h-14 w-full pl-6 pr-12 bg-page text-[#94A3B8] rounded-xl outline-none focus:outline-none focus:ring-0 hover:bg-[#CED3DA]! focus:bg-[#f6f7f9]!"
                          >
                            <option value="" disabled>
                              Select your time
                            </option>
                            {timeOptions.map((item, index) => (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>

                          {/* Custom dropdown arrow */}
                          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                            <svg
                              className="h-5 w-5 text-[#94A3B8]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 w-full">
                      {/* date */}
                      <div className="space-y-2">
                        <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                          Date
                        </h1>
                        <div className="relative w-full">
                          <select
                            name="date"
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                pickup: {
                                  ...paymentInfo.pickup,
                                  date: e.target.value,
                                },
                              })
                            }
                            value={paymentInfo.pickup.date}
                            className=" appearance-none cursor-pointer h-14 w-full pl-6 pr-12 bg-page text-[#94A3B8] rounded-xl outline-none focus:outline-none focus:ring-0 hover:bg-[#CED3DA]! focus:bg-[#f6f7f9]!"
                          >
                            <option
                              value=""
                              disabled
                              className="cursor-pointer "
                            >
                              Select your date
                            </option>
                            {dateOptions.map((item, index) => (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                            <svg
                              className="h-5 w-5 text-[#94A3B8]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* drop-off */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/mark.svg"
                      className="w-4 h-4 animate-pulse"
                    />
                    <h2 className="text-heading text-[16px] font-medium">
                      Drop - Off
                    </h2>
                  </div>
                  <div className="flex justify-between gap-8 flex-col lg:flex-row">
                    {/* location */}
                    <div className="space-y-4 w-full">
                      <div className="space-y-2">
                        <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                          Locations
                        </h1>
                        <div className="relative w-full">
                          <select
                            name="locations"
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                dropoff: {
                                  ...paymentInfo.dropoff,
                                  location: e.target.value,
                                },
                              })
                            }
                            value={paymentInfo.dropoff.location}
                            className=" appearance-none cursor-pointer h-14 w-full pl-6 pr-12 bg-page text-[#94A3B8] rounded-xl outline-none focus:outline-none focus:ring-0 hover:bg-[#CED3DA]! focus:bg-[#f6f7f9]!"
                          >
                            <option value="" disabled>
                              Select your city
                            </option>
                            {cityOptions.map((item, index) => (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                            <svg
                              className="h-5 w-5 text-[#94A3B8]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* time */}
                      <div className="space-y-2">
                        <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                          Time
                        </h1>
                        <div className="relative w-full">
                          <select
                            name="time"
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                dropoff: {
                                  ...paymentInfo.dropoff,
                                  time: e.target.value,
                                },
                              })
                            }
                            value={paymentInfo.dropoff.time}
                            className=" appearance-none cursor-pointer h-14 w-full pl-6 pr-12 bg-page text-[#94A3B8] rounded-xl outline-none focus:outline-none focus:ring-0 hover:bg-[#CED3DA]! focus:bg-[#f6f7f9]!"
                          >
                            <option value="" disabled>
                              Select your time
                            </option>
                            {timeOptions.map((item, index) => (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>

                          {/* Custom dropdown arrow */}
                          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                            <svg
                              className="h-5 w-5 text-[#94A3B8]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 w-full">
                      {/* date */}
                      <div className="space-y-2">
                        <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                          Date
                        </h1>
                        <div className="relative w-full">
                          <select
                            name="date"
                            onChange={(e) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                dropoff: {
                                  ...paymentInfo.dropoff,
                                  date: e.target.value,
                                },
                              })
                            }
                            value={paymentInfo.dropoff.date}
                            className=" appearance-none cursor-pointer h-14 w-full pl-6 pr-12 bg-page text-[#94A3B8] rounded-xl outline-none focus:outline-none focus:ring-0 hover:bg-[#CED3DA]! focus:bg-[#f6f7f9]!"
                          >
                            <option
                              value=""
                              disabled
                              className="cursor-pointer "
                            >
                              Select your date
                            </option>
                            {dateOptions.map((item, index) => (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                            <svg
                              className="h-5 w-5 text-[#94A3B8]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      }
    />
  );
};

export default paymentInfo;
