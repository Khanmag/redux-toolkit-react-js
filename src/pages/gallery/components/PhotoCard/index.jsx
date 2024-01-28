import { Box, IconButton, Typography } from "@mui/material";
import LikeIcon from "../../../../assets/icons/LikeIcon";

import s from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../../../store/gallery/gallerySlice";

const PhotoCard = ({ id, url, title }) => {
  const favoritePhotos = useSelector(store => store.gallery.favoritePhotos)
  const dispatch = useDispatch()
  const isFavorite = favoritePhotos.find(item => id === item)

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id))
    } else {
      dispatch(addToFavorite(id))
    }
  }
  return (
    <Box className={s.photoCard}>
      <img src={url} />
      <IconButton onClick={handleClick}>
        <LikeIcon isFavorite={isFavorite} />
      </IconButton>
      <Box p={1}>
        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
};

export default PhotoCard;
