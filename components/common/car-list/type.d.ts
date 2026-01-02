interface ICarCollectionProps {
  data: carDetails[];
  isLoading?: boolean;
  varient?: "detailed" | "compact";
  layout?: "scroll" | "grid";
  header?: {
    title?: string;
    showViewAll?: boolean;
  };
}

interface ICarCartProps {
  carId: string | number;
  carName: string;
  category: string;
  isLiked: boolean;
  imageUrl: string;
  flip: boolean;
  fuelCapacity: string;
  transmission: string;
  seats: number;
  price: number;
  originalPrice?: number;
  isLoading?: boolean;
  varient?: "detailed" | "compact";
}
