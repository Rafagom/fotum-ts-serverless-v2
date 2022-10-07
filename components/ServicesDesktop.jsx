import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import engLucas from "../public/engLucas.jpg";
import sandro from "../public/Sandro.jpeg";

import Image from "next/image";
// import Oakbet from "../images/oakbet.jpeg";
// import Fluxus from "../images/fluxus.jpeg";
// import SolanaIcon from "../images/solanaLogoMark.svg";
// import NearIcon from "../images/icon_nm.svg";

// import FeaturesElement from "../images/features-element.png";

function Features() {
    const [tab, setTab] = useState(1);

    const tabs = useRef(null);

    const heightFix = () => {
        if (tabs.current.children[tab]) {
            tabs.current.style.height =
                tabs.current.children[tab - 1].offsetHeight + "px";
        }
    };

    useEffect(() => {
        heightFix();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tab]);

    return (
        <section id="work" className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-gray-100 pointer-events-none "
                aria-hidden="true"
            ></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:pb-16">
                <div className="pt-12 md:pt-20">
                    {/* Section header */}
                    <div
                        className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
                        data-aos="fade-right"
                    >
                        <h1 className="text-4xl mb-4">Nossos Serviços</h1>
                        <p className="text-xl text-gray-600">
                            Our team will work closely with you throughout the
                            development process to ensure that your product is
                            flawless. Checkout projects weve worked on recently:
                        </p>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        {/* Content */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 "
                            data-aos="fade-right"
                        >
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0 grid grid-rows-3">
                                <a
                                    className={`grid grid-cols-[1fr,7fr] items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 gap-3 ${
                                        tab !== 1
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                            : "bg-gray-200 border-transparent"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(1);
                                    }}
                                >
                                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ">
                                        <Image
                                            height={24}
                                            width={24}
                                            src={"/solar-panel-solid.svg"}
                                            alt={"solar panel logo"}
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Geração Solar Fotovoltaica
                                        </div>
                                        <div className="text-gray-600">
                                            Fully operational Casino built on
                                            asdfasdfasdf top of Solana.
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className={`grid grid-cols-[1fr,7fr] items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 gap-3 ${
                                        tab !== 2
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                            : "bg-gray-200 border-transparent"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(2);
                                    }}
                                >
                                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ">
                                        <Image
                                            height={24}
                                            width={24}
                                            src={
                                                "/screwdriver-wrench-solid.svg"
                                            }
                                            alt={"solar panel logo"}
                                        />
                                    </div>

                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Instalações Elétricas
                                        </div>
                                        <div className="text-gray-600">
                                            Fluxus Finance is the first
                                            NEAR-native yield aggregator,
                                            auto-compounder, and yield
                                            optimizer.
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className={`grid grid-cols-[1fr,7fr] items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 gap-3 ${
                                        tab !== 3
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                            : "bg-gray-200 border-transparent"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(3);
                                    }}
                                >
                                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ">
                                        <Image
                                            height={24}
                                            width={24}
                                            src={"/chart-line-solid.svg"}
                                            alt={"solar panel logo"}
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Eficiência energética
                                        </div>
                                        <div className="text-gray-600">
                                            Fluxus Finance is the first
                                            NEAR-native yield aggregator,
                                            auto-compounder, and yield
                                            optimizer.
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 "
                            data-aos="zoom-y-out"
                            ref={tabs}
                        >
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col shadow-lg">
                                        <Image
                                            height={360}
                                            width={600}
                                            src={sandro}
                                            alt="Features bg"
                                        />

                                        <div className="absolute bg-white  bottom-[-40px] right-[-40px] py-6 px-6 z-20 flex flex-col items-center justify-center shadow-lg border border-[#00324b]">
                                            <ul className="flex flex-col  gap-5 text-left">
                                                <li>&#x2713; Projeto</li>
                                                <li>&#x2713; Homologação</li>
                                                <li>&#x2713; Instalação</li>
                                                <li>&#x2713; Manutenção</li>
                                                <li>&#x2713; Ampliações</li>
                                                <li>&#x2713; Remanejamento</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Transition>
                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col shadow-lg">
                                        <Image
                                            height={360}
                                            width={600}
                                            src={sandro}
                                            alt="Features bg"
                                        />

                                        <div className="absolute bg-white  bottom-[-40px] right-[-40px] py-6 px-6 z-20 flex flex-col items-center justify-center shadow-lg border border-[#00324b]">
                                            <ul className="flex flex-col  gap-5 text-left">
                                                <li>
                                                    &#x2713; Projetos e
                                                    instalação
                                                </li>
                                                <li>
                                                    &#x2713; Novas instalações
                                                </li>
                                                <li>&#x2713; Reformas</li>
                                                <li>
                                                    &#x2713; Adequações
                                                    normativas
                                                </li>
                                                <li>
                                                    &#x2713; Inspeções e laudos
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Transition>
                                {/* Item 3 */}
                                <Transition
                                    show={tab === 3}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col shadow-lg">
                                        <Image
                                            height={360}
                                            width={600}
                                            src={sandro}
                                            alt="Features bg"
                                        />

                                        <div className="absolute bg-white  bottom-[-40px] right-[-40px] py-6 px-3 z-20 flex flex-col items-center justify-center shadow-lg border border-[#00324b]">
                                            <ul className="flex flex-col  gap-5 text-left">
                                                <li>
                                                    &#x2713; Análises de
                                                    potenciais economias
                                                </li>
                                                <li>
                                                    &#x2713; Medições e
                                                    identificações de falhas
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
