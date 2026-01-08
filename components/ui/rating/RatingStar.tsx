import Rating from "@mui/material/Rating";

const RatingStar: React.FC<IRatingStarProps> = ({ ...props }) => {
  return <Rating {...props} />;
};

export default RatingStar;
