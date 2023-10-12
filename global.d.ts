import { OfficeConfig, OfficeAPI } from "./src/SDK/type";

declare global {
  interface Window {
    PolarisWebOffice: (containerId: string, config: OfficeConfig) => Promise<OfficeAPI>;
  }
}

export {};
