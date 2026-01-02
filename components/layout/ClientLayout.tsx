"use client";

import { useFilter } from "@/context/FilterContext";
import FilterSidebar from "@/components/common/filter/FilterSidebar";
import { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isFilterOpen } = useFilter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="lg:flex">
        {isFilterOpen && (
          <>
            <div
              className="fixed inset-0 lg:inset-auto bg-black/50 lg:bg-transparent z-40"
              // onClick={() => setIsFilterOpen(false)}
            />
            <FilterSidebar isLoading={isLoading} />
          </>
        )}
        {children}
      </div>
    </>
  );
}
