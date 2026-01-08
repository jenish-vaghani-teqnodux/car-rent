"use client";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useFilter } from "@/context/FilterContext";
import { usePathname } from "next/navigation";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const FilterIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer !important",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    transition: theme.transitions.create("width"),
  },
}));
const SearchWrapperInner: React.FC<SearchWrapperProps> = ({
  placeholder = "Search",
}) => {
  const pathname = usePathname();
  const showFilter = pathname === "/";
  const { toggleFilter } = useFilter();
  return (
    <Search className="flex border-2 px-2 border-devider hover:border-[#A9B9D2]! rounded-4xl h-11">
      <SearchIconWrapper>
        <img src="/assets/icons/search.svg" className="w-6 h-6 " />
      </SearchIconWrapper>

      <StyledInputBase
        className="w-full lg:text-[18px]!"
        placeholder={placeholder || "Search"}
        inputProps={{ "aria-label": "search" }}
      />
      {showFilter && (
        <FilterIconWrapper>
          <img
            src="/assets/icons/filter.svg"
            className="w-6 h-6"
            onClick={toggleFilter}
          />
        </FilterIconWrapper>
      )}
    </Search>
  );
};

export default SearchWrapperInner;
