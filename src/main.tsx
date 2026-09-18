import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PortfolioXP from "./PortfolioXP";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioXP />
  </StrictMode>,
);
