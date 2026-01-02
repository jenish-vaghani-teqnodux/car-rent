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
}
