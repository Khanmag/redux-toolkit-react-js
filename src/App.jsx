import { Box, Paper } from "@mui/material"
import Header from "./components/Header"
import Galery from "./pages/galery/App"

function App() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
      <Paper elevation={0}>
        <Header />
      </Paper>
      <Paper>
        <Galery />
      </Paper>
    </Box>
  )
}

export default App
