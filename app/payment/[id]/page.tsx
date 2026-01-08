"use client";
import React, { useState } from "react";
import BillingInfo from "./BillingInfo";
import RentalInfo from "./RentalInfo";
import PaymentMethod from "./PaymentMethod";
import Confirmation from "./Confirmation";
import RentalSummary from "./RentalSummary";
import { paymentApi } from "@/lib/mockData";
import { useRouter } from "next/navigation";

const PaymentPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    pickup: {
      location: "",
      date: "",
      time: "",
    },
    dropoff: {
      location: "",
      date: "",
      time: "",
    },
    cardNumber: "",
    exprationDate: "",
    cardHolder: "",
    cvc: "",
    marketingConsent: false,
    termsAccepted: false,
    rating: paymentApi.rating,
    promoCode: "",
  });

  const handleRentNow = () => {
    router.push("/success");
  };

  return (
    <div className="w-full p-6 flex gap-6 flex-col-reverse md:flex-row">
      <div className="w-full space-y-6">
        {/* Billing Info Card */}
        <BillingInfo
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
          isLoading={isLoading}
        />

        {/* Rental Info Card */}
        <RentalInfo
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
          isLoading={isLoading}
        />

        {/* Payment Method Card */}
        <PaymentMethod
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
          isLoading={isLoading}
        />

        {/* Confirmation */}
        <Confirmation
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
          onClick={handleRentNow}
          isLoading={isLoading}
        />
      </div>

      {/* Rental Summary */}
      <div className="w-full md:min-w-[400px] lg:min-w-[488px] bg-card rounded-xl h-fit">
        <RentalSummary
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
          data={paymentApi}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default PaymentPage;
