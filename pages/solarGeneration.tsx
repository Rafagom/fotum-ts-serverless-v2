import { NextPage } from "next";
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
            <div className="flex flex-col p-4 gap-8 mb-6 lg:max-w-[1400px] lg:mx-auto lg:px-24 ">
                <div className="flex flex-col gap-4 max-w-3xl">
                    <p className="text-xl lg:text-2xl">Fale com nosso</p>
                    <h2 className="text-5xl font-extrabold lg:text-7xl">
                        Engenheiro especialista em{" "}
                        <span className="text-[#ffaa00]">Geração Solar.</span>
                    </h2>
                    <p className="text-2xl max-w-[40ch]">
                        Receba agora um atendimento personalizado do nosso
                        engenheiro que atende a instalações de geração solar
                        todos os dias!
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 justify-start items-center sm:flex-row">
                        <a
                            href="https://wa.me/message/2KTISK2P7CG6E1"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl text-lg hover:bg-green-200 w-fit"
                        >
                            <WhatsappLogo size={28} />
                            <p>Falar com o engenheiro</p>
                        </a>
                        <a href="tel:48984110903" className="text-center">
                            (48) 98411-0903 - Florianópolis e Região
                        </a>
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
