import { NextPage } from "next";
import Image from "next/image";
import { WhatsappLogo } from "phosphor-react";
import About from "../components/Ads/AboutEngineer";
import Advantages from "../components/Ads/Advantages";
import WorkNumbers from "../components/Ads/WorkNumbers";
import { Footer } from "../components/Footer";
// import { ContactForm } from "../components/Form";
import { Header } from "../components/Header";
import SolarDiagram from "../components/SolarDiagram";

const SolarGeneration: NextPage = () => {
    return (
        <>
            <Header />
            <div className="lg:bg-[url('/CME5.png')] bg-no-repeat bg-cover bg-center md:h-[85vh] relative ">
                <div
                    className="hidden lg:flex absolute right-0 bottom-0  z-10"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <Image
                        src={"/engLucasNoBg.svg"}
                        width={800}
                        height={680}
                        alt={"Geração residencial"}
                    />
                </div>
                <div className="flex flex-col p-4 gap-8 mb-6 lg:max-w-[1600px] lg:mx-auto lg:px-24 mt-24 justify-center h-full">
                    <div className="flex flex-col gap-8 bg-white max-w-[600px] px-8 py-10 rounded-3xl opacity-95 ">
                        <div className="flex flex-col gap-4 max-w-3xl opacity-100">
                            <p className="text-xl lg:text-2xl">
                                Fale com nosso
                            </p>
                            <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">
                                Engenheiro especialista em <br />
                                <span className="text-[#ffaa00]">
                                    Energia Solar.
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl max-w-[40ch]">
                                Receba agora um atendimento personalizado do
                                nosso engenheiro que atende a instalações de
                                Energia Solar todos os dias!
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4 justify-start items-center sm:flex-row">
                                <a
                                    href="https://wa.me/message/2KTISK2P7CG6E1"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl md:text-lg hover:bg-green-200 w-fit"
                                >
                                    <WhatsappLogo size={28} />
                                    <p>Falar com o engenheiro</p>
                                </a>
                                <a
                                    href="tel:48984110903"
                                    className="text-center"
                                >
                                    (48) 98411-0903
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SolarDiagram />
            <WorkNumbers />
            <Advantages />
            <About />
            <Footer />
        </>
    );
};
export default SolarGeneration;
