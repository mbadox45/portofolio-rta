"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export default function ParallaxProviderWrapper({ children }) {
  return <ParallaxProvider className="">{children}</ParallaxProvider>;
}
