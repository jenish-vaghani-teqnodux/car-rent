"use client";

import dynamic from "next/dynamic";

const SearchWrapper = dynamic(() => import("./SearchWrapperInner"), {
  ssr: false,
});
export default SearchWrapper;
