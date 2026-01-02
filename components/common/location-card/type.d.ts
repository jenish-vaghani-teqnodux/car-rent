import dayjs from "dayjs";

declare global {
  interface IRideLocationCardProps {
    title: string;
    isLoading?: boolean;
    data?: {
      location: string;
      date: string;
      time: string;
    };
    onChange?: (data: IrideLocationDetails) => void;
  }

  interface IrideLocationDetails {
    location: string;
    date: string;
    time: string;
  }
}
