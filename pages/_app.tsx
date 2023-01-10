import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import * as gtag from "./utils/gtag";

// only events on production
if (process.env.NODE_ENV === "production") {
  // Notice how we track pageview when route is changed
  Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
