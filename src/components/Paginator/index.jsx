import { Box, Button, IconButton, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../store/gallery/gallerySlice";
import { Search } from "@mui/icons-material";
import { useState } from "react";


const Paginator = ({total, page}) => {
  const [value, setValue] = useState(page)
  const dispatch = useDispatch()
  return (
    <Box display={"flex"}>
      <Box>
        <TextField 
          value={value}
          onChange={(e) => {
            if (page > 0 && page <= total) setValue(e.target.value)
          }}
        />
        <IconButton 
          onClick={() => {
            if (page !== +value) dispatch(fetchPhotos(value))
          }}
          disabled={page === value}
        >
          <Search color="primary" />
        </IconButton>
      </Box>
      <Box>
        { (page > 3) && <PageButton page={1} /> }

        {
          [page - 2, page -1, page, page + 1, page + 2].map( item => (
          (item >= 1 && item <=total ) ? <PageButton key={item} page={item} /> : null
          ))
        }
        
        {/* { !!(page - 1) && <PageButton page={page - 1} />}
        { <PageButton page={page} />}
        { (page < total) && <PageButton page={page + 1} />} */}

        { (page < (total - 2)) && <PageButton page={total} />}
      
    </Box>
    </Box>
    
  );
};

export default Paginator;

const PageButton = ({page}) => {
  const dispatch = useDispatch()
  const currentPage = useSelector( store => store.gallery.page) 
  return (
    <Button variant={(currentPage === page ) ? "outlined" : ""} onClick={() => dispatch( fetchPhotos(page))}>{page}</Button>
  )
}
