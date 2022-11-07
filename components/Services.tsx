import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { CaretUp } from "phosphor-react";
import Link from "next/link";

export function Services() {
    return (
        <div
            id="servicos"
            className="flex flex-col gap-3 px-4 mt-4 mb-16 max-w-[1400px] md:mx-auto md:px-0 "
        >
            <h2 className="text-[#ffaa00] font-medium">NOSSOS SERVIÇOS</h2>
            <p>
                Impulsionamos a transição para sistemas de energia mais
                sustentáveis, confiáveis ​​e acessíveis. Com nossas tecnologias
                inovadoras, energizamos a sociedade!
            </p>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] ">
                            <Image
                                src={"/solar-panel-solid.svg"}
                                alt={"solar panel logo"}
                                width={24}
                                height={24}
                            />
                            <p className="text-left">
                                Energia Solar Fotovoltaica
                            </p>
                            <CaretUp
                                size={20}
                                className={open ? "rotate-180 transform" : ""}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col text-center gap-y-4">
                            <ul className="flex flex-col  gap-5 text-left pl-6">
                                <li>&#x2713; Projeto</li>
                                <li>&#x2713; Homologação</li>
                                <li>&#x2713; Instalação</li>
                                <li>&#x2713; Manutenção</li>
                                <li>&#x2713; Ampliações</li>
                                <li>&#x2713; Remanejamento</li>
                            </ul>
                            <Link
                                href="/solarGeneration"
                                className="text-center font-semibold"
                            >
                                Saiba mais...
                            </Link>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] ">
                            <Image
                                src={"/screwdriver-wrench-solid.svg"}
                                alt={"solar panel logo"}
                                width={24}
                                height={24}
                            />
                            <p className="text-left">Instalações Elétricas</p>
                            <CaretUp
                                size={20}
                                className={open ? "rotate-180 transform" : ""}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col text-center gap-y-4">
                            <ul className="flex flex-col  gap-5 text-left pl-6">
                                <li>&#x2713; Projetos e instalação</li>
                                <li>&#x2713; Novas instalações e reformas</li>
                                <li>&#x2713; Adequações normativas</li>
                                <li>&#x2713; Inspeções e laudos</li>
                            </ul>
                            <Link
                                href="#"
                                className="text-center font-semibold tex"
                            >
                                Saiba mais...
                            </Link>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] ">
                            <Image
                                className="text-yellow-500"
                                src={"/chart-line-solid.svg"}
                                alt={"solar panel logo"}
                                width={24}
                                height={24}
                            />
                            <p className="text-left">Eficiência energética</p>
                            <CaretUp
                                size={20}
                                className={open ? "rotate-180 transform" : ""}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col text-center gap-y-4">
                            <ul className="flex flex-col  gap-5 text-left pl-6">
                                <li>
                                    &#x2713; Análises de potenciais economias
                                </li>
                                <li>
                                    &#x2713; Medições e identificações de falhas
                                </li>
                            </ul>
                            <Link
                                href="#"
                                className="text-center font-semibold tex"
                            >
                                Saiba mais...
                            </Link>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}
