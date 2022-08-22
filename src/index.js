import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./store/StateProvider";
import reducer, { initialState } from "./store/reducer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);
