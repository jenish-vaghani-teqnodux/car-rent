import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-page px-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-lg p-6 sm:p-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-[#1F2544]">
          Payment Successful 🎉
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-secondary mt-2">
          Your car rental has been confirmed successfully.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200" />

        {/* Info */}
        <div className="space-y-2 text-sm text-[#1F2544]">
          <div className="flex justify-between">
            <span>Payment Status</span>
            <span className="font-semibold text-green-600">Success</span>
          </div>

          <div className="flex justify-between">
            <span>Transaction ID</span>
            <span className="font-medium">TXN-2026-001</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href={"/"}
            // onClick={() => navigate("/")}
            className="btn-primary py-3 w-full  text-[12px] sm:text-[16px] font-medium rounded-md cursor-pointer"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
