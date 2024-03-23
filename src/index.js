import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";

import { ContextProvider } from "./context/ContextProvider";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCfUx1RXxbf1x0ZFdMYVxbQXJPMyBoS35RckVgW3xecnVVQ2RVUEB+"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
