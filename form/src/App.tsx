import React, { useEffect, useState } from "react";
import { Container } from "./components/styles/Container.styled.js";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import { AppStyled } from "./components/styles/App.js";
import theme from "./Theme";
import { Route, Router } from "react-router-dom";
import Homepage from "./components/Homepage"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
       <AppStyled>
        <Router>
          <Route index element={}  />
        </Router>
       <Nav />
     <p>
      thisjfnlsdfas,
     </p>
       </AppStyled>
    
      </ThemeProvider>
  );
}

export default App;
