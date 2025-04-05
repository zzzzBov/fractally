import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fractally } from "@/components/Fractally";
import "@/styles/styles.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Fractally />
  </StrictMode>
);
