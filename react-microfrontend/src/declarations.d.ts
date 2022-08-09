// import { SharedSspaEventsType } from "../../utils/src/leonardorick-utils";

declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

// declare module "@leonardorick/utils" {
//   function emitEvent(name: string, data: any): void;
//   const SHARED_SSPA_EVENTS: SharedSspaEventsType;
//   export = emitEvent;
// }
