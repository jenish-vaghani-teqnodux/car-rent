import dynamic from "next/dynamic";

const TimePickerField = dynamic(() => import("./TimePickerWrapper"), {
  ssr: false,
});

export default TimePickerField;
