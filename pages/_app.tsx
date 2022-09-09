import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Widget } from "../components/Widget";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Widget />
        </>
    );
}

export default MyApp;
