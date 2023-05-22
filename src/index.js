import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { Header } from "./features/header/Header";
import { store } from "./app/store.js";
import { Footer } from "./features/footer/Footer";
// Add import statement below

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Header />
    <App />
    <Footer />
  </Provider>
);
