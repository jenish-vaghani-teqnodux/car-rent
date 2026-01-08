interface Reviews {
  id?: string;
  name: string;
  role: string;
  profileImage: string;
  reviewDate: string;
  rating: number;
  reviewText: string;
}

interface IReviewsCartProps {
  data: Reviews[];
  isLoading: boolean;
}

interface ICarGalleryProps {
  isLoading: boolean;
  data: string[];
}

interface ICarDetailCartProps {
  isLoading: boolean;
  data: {
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
    views?: string[];
    rating: number;
    totalReviewer: string;
    description: string;
  };
}
