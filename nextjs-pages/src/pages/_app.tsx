import "@/styles/globals.css";
import type { AppProps } from "next/app";
import formbricks from "@formbricks/js";
import { useEffect } from "react";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  formbricks.init({
    environmentId: "<your-environment-id>",
    apiHost: "https://app.formbricks.com",
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
