import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

const LikeIcon = ({isFavorite}) => {
  if (isFavorite) return <Favorite color="error" />
  return < FavoriteBorderOutlined color="error" />
};

export default LikeIcon;
