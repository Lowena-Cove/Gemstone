declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

// Steam Client API types for browser integration
declare global {
  interface Window {
    SteamClient?: {
      Browser?: {
        OpenURL: (url: string) => void;
      };
    };
  }
}

// Service interface for streaming services
interface StreamingService {
  name: string;
  url: string;
  logo: string;
  region?: string;
}
