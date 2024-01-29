import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../../store/gallery/gallerySlice";
import PhotoCard from "../components/PhotoCard";

import s from './index.module.css'
import Paginator from "../../../components/Paginator";
// import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const hasError = useSelector( store => store.gallery.hasError)
  const isLoading = useSelector( store => store.gallery.isLoading)
  const photos = useSelector(store => store.gallery.photos)
  const dispatch = useDispatch()
  const page = useSelector( store => store.gallery.page)
  const total = 5000 / 10
  // const { ref: target } = useInView({
  //   onChange: (InView) => {
  //     if (InView) setPhotosOnPage(p => p + 20)
  //   }
  // })

  useEffect(() => {
    dispatch( fetchPhotos(page) )
  }, [dispatch, page])

  return (
    <Box>
      <Box p={1}>
        <Typography variant="h3">Gallery</Typography>
      </Box>
      {
        hasError
          ? <Typography>{hasError}</Typography>
          : (isLoading)
            ? <Typography>Loading...</Typography>
            : <Box className={s.photoContainer}>
              {
                photos.map(item => (
                  <PhotoCard key={item.id} id={item.id} url={item.url} title={item.title} />
                ))
              }
              {/* <Typography ref={target}>{(photosOnPage < photos.length) ? "Loading" : 'it is all photos'}</Typography> */}
            </Box>
      }
      <Box>
        <Paginator total={total} page={page} />
      </Box>

    </Box>
  );
};

export default Gallery;
