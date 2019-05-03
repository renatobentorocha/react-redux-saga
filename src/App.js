import React from "react";
import { Provider } from "react-redux";
import "./config/ReactoTronConfig";
import store from "./store/index";
import Routes from "./routes";
console.tron.log("Testando");

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
