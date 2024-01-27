
import { Box } from '@mui/material';
import FavoriteCounter from '../FavoriteCounter';

const Header = () => {

  return (
    <Box display={"flex"} justifyContent={"end"} p={1}>
      <FavoriteCounter />
    </Box>
  );
};

export default Header;
