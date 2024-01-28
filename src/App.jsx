import { Box, Paper } from "@mui/material"
import Header from "./components/Header"
import Gallery from "./pages/gallery/App"

function App() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
      <Paper elevation={0}>
        <Header />
      </Paper>
      <Paper>
        <Gallery />
      </Paper>
    </Box>
  )
}

export default App
