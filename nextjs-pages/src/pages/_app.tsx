import "@/styles/globals.css";
import type { AppProps } from "next/app";
import formbricks from "@formbricks/js";
import { useEffect } from "react";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  formbricks.init({
    environmentId: "cllxhby3p0b1fmr0her1wkwtq",
    apiHost: "https://app.formbricks.com", // e.g. https://app.formbricks.com
    debug: true, // remove when in production
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Connect next.js router to Formbricks
    const handleRouteChange = formbricks?.registerRouteChange;
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return <Component {...pageProps} />;
}
