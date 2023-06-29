import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/docs.css";
import "./assets/css/theme.min.css";
import "./assets/css/theme.minc619.css";
import "./assets/css/vendor.min.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// root.render(
//   <React.StrictMode>

//       <App />
  
//   </React.StrictMode>
// );
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
