import type { AppProps } from "next/app";
import Footer from "../components/navigation/Footer";
import NavBar from "../components/navigation/NavBar";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
