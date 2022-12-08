import { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/Form";
import { Header } from "../components/Header";

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <title>Fótum Engenharia | Contato</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>

            <div className="flex flex-col pt-20 h-[100vh] justify-between">
                <Header />
                <ContactForm />

                <Footer />
            </div>
        </>
    );
};
export default Contact;
