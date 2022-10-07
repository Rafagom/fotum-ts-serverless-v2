import "../styles/globals.css";
import "aos/dist/aos.css";

import type { AppProps } from "next/app";

import { Widget } from "../components/Widget";
import { useEffect } from "react";

import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 900,
            easing: "ease-out-cubic",
        });
    });

    return (
        <>
            <Component {...pageProps} />
            <Widget />
        </>
    );
}

export default MyApp;
