// React Router Imports
import { BrowserRouter } from "react-router-dom";
// Material UI Imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Theme Imports
import theme from "./theme";
// Component Imports
import Layout from "./Layout";

function App() {
  // any logic

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
