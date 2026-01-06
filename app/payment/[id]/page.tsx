"use client";
import React, { useState } from "react";
import BillingInfo from "./BillingInfo";
import RentalInfo from "./RentalInfo";
import PaymentMethod from "./PaymentMethod";
import Confirmation from "./Confirmation";
import RentalSummary from "./RentalSummary";

const PaymentPage = () => {
  const [paymentInfo, setPaymentInfo] = useState({
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
  });

  return (
    <div className="w-full p-6 flex gap-6">
      <div className="w-full space-y-6">
        {/* Billing Info Card */}
        <BillingInfo />

        {/* Rental Info Card */}
        <RentalInfo />

        {/* Payment Method Card */}
        <PaymentMethod />

        {/* Confirmation */}
        <Confirmation />
      </div>

      {/* Rental Summary */}
      <div className="min-w-[492px] bg-card h-[560px] rounded-xl">
        <RentalSummary />
      </div>
    </div>
  );
};

export default PaymentPage;
