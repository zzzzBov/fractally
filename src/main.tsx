import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fractally } from "@/components/Fractally";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Fractally />
  </StrictMode>
);
