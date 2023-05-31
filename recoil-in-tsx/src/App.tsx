import React from "react";
import MainRouter from "./router/MainRouter";
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App;