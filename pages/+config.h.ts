import type { Config } from "vike-react/types";
import Layout from "../layouts/LayoutDefault";
import Head from "../layouts/HeadDefault";
import logoUrl from "../assets/logo.svg";
import vikeReact from "vike-react";

import {} from "virtual:pwa-register/react";

// Default config (can be overriden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "My Vike App",
  // <meta name="description">
  description: "Demo showcasing Vike",
  // <link rel="icon" href="${favicon}" />
  favicon: logoUrl,
  extends: vikeReact,
} satisfies Config;
