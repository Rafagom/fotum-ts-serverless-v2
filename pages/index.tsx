import Features from "../components/ServicesDesktop";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutEngineer from "../components/Ads/AboutEngineer";
import Advantages from "../components/Ads/SolarAdvantages";
import WorkNumbers from "../components/Ads/WorkNumbers";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { KnownBrands } from "../components/KnownBrands";
import { Hero2 } from "../components/Hero2";
import { MobileWelcome } from "../components/MobileWelcome";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Fótum Engenharia</title>
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
            <div className="flex flex-col w-full overflow-hidden">
                <Header />

                <div className="sm:hidden flex">
                    <MobileWelcome />
                </div>

                <div id="hero" className="flex flex-col pt-24">
                    <div className="flex flex-col md:grid md:grid-rows-2  ">
                        <div className="relative ">
                            <Hero />
                        </div>
                        <div className="relative">
                            <Hero2 />
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Features />
                    </div>

                    <div className="md:hidden">
                        <Services />
                    </div>

                    <KnownBrands />

                    <div className="pt-48 pb-10">
                        <AboutEngineer />
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;
