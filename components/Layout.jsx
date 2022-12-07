import Head from "next/head";
// import estilo from "../styles/globals.scss";
import Link from "next/link";
// import Image from "next/image";
import icono from "../public/favicon.ico";

import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, titulo, descripcion }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{titulo}</title>
        <meta name="description" content={descripcion} />

        
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="canonical"
          href="https://cambiar-la-url.com"
          key="canonical"
        />

        <meta charSet="utf-8" />
        <meta name="theme-color" content="#556BD1" />

        <meta name="application-name" content="IP Address Tracker" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="IP Address Tracker" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#556BD1" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="apple-touch-icon" href="/favicon-32x32.png" />

        <meta
          property="og:title"
          content="IP Address Tracker - Find any IP address or domain easily."
        />
        <meta
          property="og:description"
          content="Find any IP address or domain easily."
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="IP Address Tracker - Find any IP address or domain easily"
        />
        <meta property="og:image" content="/ogimage.jpg" />
        <meta property="og:image:secure_url" content="/ogimage.jpg" />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="600" />

        <meta
          name="twitter:title"
          content="IP Address Tracker - Find any IP address or domain easily"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.jpg" />
        <meta name="twitter:image:src" content="/ogimage.jpg" />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="900" />
        <meta name="twitter:image:height" content="600" />

      </Head>

      <Nav></Nav>

      <main id="conteHome">{children}</main>

      <Footer></Footer>
    </div>
  );
}
