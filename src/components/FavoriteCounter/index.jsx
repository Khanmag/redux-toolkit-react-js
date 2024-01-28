import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import styles from './index.module.css'
import { useSelector } from 'react-redux';

const FavoriteCounter = () => {
  const favoritePhotos = useSelector(store => store.gallery.favoritePhotos)
  return (
    <Box className={styles.counterIcon}>
      <FavoriteBorderOutlined color='error'/>
      <Typography>{favoritePhotos.length}</Typography>
    </Box>
  );
};

export default FavoriteCounter;
