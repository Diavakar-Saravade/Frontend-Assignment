import { ThemeProvider } from "@mui/material";
import Home from "./pages/Home/Home";
import theme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
