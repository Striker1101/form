import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import { AppStyled } from "./components/styles/App.js";
import theme from "./Theme";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppStyled>
        <Nav />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path={"/form/*"} element={<Form />} />
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
