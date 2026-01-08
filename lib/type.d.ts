interface IGetData {
  categoryTypes: {
    id: number;
    label: string;
    value: string;
    count: number;
  }[];
  carCapacityOptions: {
    id: number;
    label: string;
    value: string;
    count: number;
  }[];
}

interface slots {
  id: string;
  carId: string;
  title: string;
  content: string;
  image_url: string;
  flip: boolean;
}

interface carDetails {
  id: string;
  title: string;
  category: string;
  user_liked: boolean;
  image_url: string;
  fuelCapacity: string;
  transmission: string;
  seats: number;
  price: number;
  originalPrice?: number;
  flip: boolean;
  views: string[];
  rating: number;
  totalReviewer: string;
  description: string;
}

interface IDashboardData {
  slots: slots[];
  locationOptions: {
    label: string;
    value: string;
  }[];
  popular_car: carDetails[];
  recomendation_car: carDetails[];
  pickup: {
    location: string;
    date: string;
    time: string;
  };
  dropoff: {
    location: string;
    date: string;
    time: string;
  };
}

interface IDetails {
  car_detail: carDetails;
  reviews: {
    id: string;
    name: string;
    role: string;
    profileImage: string;
    reviewDate: string;
    rating: number;
    reviewText: string;
  }[];
  recent_car: carDetails[];
  recomendation_car: carDetails[];
}

interface IPaymentApi {
  image_url: string;
  carName: string;
  rating: number;
  totalReviewer: string;
  subTotal: number;
  tax: 0;
  total: number;
}
