"use client";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext<IFilterContextType | null>(null);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <FilterContext.Provider value={{ isFilterOpen, toggleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within FilterProvider");
  }

  return context;
};
