import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
    ArrowDown,
    ArrowFatLinesDown,
    Calculator,
    CurrencyCircleDollar,
    HouseLine,
    Lightbulb,
    Medal,
    NumberSeven,
    NumberTwo,
    WhatsappLogo,
} from "phosphor-react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import styles from "../styles/Home.module.css";

const adsSolarGeneration: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Fótum Engenharia | Geração Solar</title>
                {/* <meta name="description" content="Generated by create next app" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Header />
            <div className="flex flex-col p-4 gap-8 h-screen">
                <div className="flex flex-col gap-4">
                    <p className="text-xl ">Fale com um</p>
                    <h2 className="text-5xl font-extrabold">
                        Engenheiro especialista em{" "}
                        <span className="text-[#ffaa00]">Geração Solar.</span>
                    </h2>
                    <p className="text-lg">
                        Receba agora um atendimento personalizado de um
                        engenheiro que atende a instalações de geração solar
                        todos os dias
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <a
                            href="https://wa.me/message/2KTISK2P7CG6E1"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl text-lg hover:bg-green-200"
                        >
                            <WhatsappLogo size={28} />
                            <p>Falar com o engenheiro</p>
                        </a>
                        <a href="tel:48984110903" className="text-center">
                            (48) 98411-0903 - Florianópolis e Região
                        </a>
                    </div>
                    <div className="relative flex flex-col gap-2 justify-center items-center font-bold uppercase text-center text-xl">
                        {/* <ArrowDown
                            className="arrow-bounce"
                            size={24}
                            weight="duotone"
                        /> */}
                        <p>Ver mais</p>
                        <div className="chevron text"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-4 gap-8 bg-gray-200">
                {/* -- Mobile -- */}
                <div className="sm:hidden  grid grid-rows-4 gap-5  text-[#ffaa00] mt-6">
                    <div className="grid grid-cols-[2fr,8fr] px-8 py-4  gap-4 items-center justify-start bg-[#00324b] rounded-full">
                        <HouseLine size={72} weight="thin" />
                        <p>
                            Valorização do imóvel e rápido retorno de
                            investimento
                        </p>
                    </div>
                    <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full">
                        <Medal size={72} weight="thin" />
                        <p>
                            Tecnologia de microinversores com até 25 anos de
                            garantia
                        </p>
                    </div>
                    <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full">
                        <Lightbulb size={72} weight="thin" />
                        <p className="w-[16ch]">
                            Até 95% <br />
                            de economia na conta de energia{" "}
                        </p>
                    </div>
                    <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full">
                        <CurrencyCircleDollar size={72} weight="thin" />

                        <p className="w-[16ch]">
                            Parcele em até 72x, sem entrada
                        </p>
                    </div>
                </div>

                <div className="sm:grid grid-cols-3 gap-3 justify-end hidden">
                    <div className="flex items-center justify-center">
                        <HouseLine size={56} weight="thin" />
                    </div>
                    <div className="flex items-center justify-center">
                        <Medal size={56} weight="thin" />
                    </div>
                    <div className="flex items-center justify-center">
                        <CurrencyCircleDollar size={56} weight="thin" />
                    </div>
                </div>
                <a
                    href="https://wa.me/message/2KTISK2P7CG6E1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-4 mt-6"
                >
                    <div className="flex items-center justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl text-lg hover:bg-green-200">
                        Falar com o engenheiro agora!
                    </div>
                </a>
            </div>

            <div className="flex flex-col gap-3 p-4">
                <h1 className="text-3xl font-extrabold text-center">
                    Sobre o Engenheiro
                </h1>

                <div className="flex items-center justify-center">
                    <Image
                        className=" rounded-full"
                        src={"/engLucas.jpg"}
                        width={200}
                        height={200}
                        alt="Engenheiro Lucas"
                    />
                </div>

                <hr />
                <h2 className="text-2xl font-bold text-center">
                    Eng. Lucas Marcelo de Deus
                </h2>
                <p className="text-center text-xl">
                    Formado em Engenharia Elétrica pela Universidade Federal de
                    Santa Catarina – UFSC, com enfoque em sistemas de energia e
                    energia solar fotovoltaica, atua com projetos elétricos e
                    instalações residenciais, comerciais e prediais há 10 anos.
                    Além da experiência com energias renováveis, também foi
                    encarregado pela a medição e contabilização de energia em
                    usinas de todo o Brasil, sendo responsável pelas questões
                    regulatórias junto à Câmara de Comercialização de Energia
                    Elétrica – CCEE e Operador Nacional do Sistema Elétrico –
                    ONS.
                </p>
            </div>

            <div className="flex flex-col gap-3 p-4 bg-gray-200">
                <h1 className="text-3xl font-extrabold text-center">
                    Sobre a Empresa
                </h1>

                <div className="flex items-center justify-center">
                    <Image
                        className=" rounded-full"
                        src={"/engLucas.jpg"}
                        width={200}
                        height={200}
                        alt="Engenheiro Lucas"
                    />
                </div>

                <hr className="bg-[#00324b]" />
                <h2 className="text-2xl font-bold text-center">
                    Fótum Engenharia
                </h2>
                <p className="text-center text-xl">
                    A Fótum Engenharia conta com mais de 10 anos de experiência
                    em serviços elétricos de excelência, oferecendo as melhores
                    soluções em projetos, instalações e energia solar
                    fotovoltaica. Com equipe especializada e altamente
                    capacitada, oferecemos segurança e garantia em todos os
                    serviços prestados, atendendo à todas as normas técnicas e
                    de segurança vigente. Os nossos valores estão pautados na
                    confiança, transparência e respeito.
                </p>

                <a
                    href="https://wa.me/message/2KTISK2P7CG6E1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-4 mt-6"
                >
                    <div className="flex items-center justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl text-lg hover:bg-green-200">
                        Falar com um especialista
                    </div>
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default adsSolarGeneration;
