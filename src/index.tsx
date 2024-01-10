import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
// import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
// import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    {/* <I18nextProvider i18n={i18n}> */}
      {/* <Router/>  */}
      <h1>Hello World!</h1>
      <h2>This website soon will be made by Sherkhan K.</h2>
    {/* </I18nextProvider> */}
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
