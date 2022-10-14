import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <div className="flex flex-col gap-12 mb-5 max-w-[1400px] mx-auto sm:h-[80vh] md:min-h-[500px] md:h-full items-center justify-center">
            <div className="items-center justify-center h-full md:grid md:grid-cols-2 md:gap-x-24">
                <div className="hidden justify-center items-center lg:grid lg:col-start-2 w-full rounded-l-3xl">
                    <div
                        className="flex absolute shadow right-0 top-0 rounded-none lg:rounded-l-3xl"
                        data-aos="fade-left"
                    >
                        <div className="absolute opacity-40 bg-[#6b92a7] h-full w-full z-10 rounded-none lg:rounded-l-3xl top-0 "></div>

                        <div className="flex shadow right-0 top-0 rounded-l-3xl">
                            <Image
                                className="rounded-none lg:rounded-l-3xl"
                                src={"/CME5.png"}
                                width={800}
                                height={500}
                                alt={"Geração residencial"}
                            />
                        </div>

                        <div
                            className="flex absolute right-0 bottom-0  z-10"
                            data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <Image
                                src={"/engLucasNoBg.svg"}
                                width={260}
                                height={400}
                                alt={"Geração residencial"}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className=" flex flex-col  md:gap-10 md:h-full  justify-center items-center md:row-start-1"
                    data-aos="zoom-y-out"
                >
                    <p className="px-4 text-lg sm:text-3xl md:px-0">
                        Equipe especializada e altamente capacitada, oferecemos
                        segurança e garantia em todos os serviços prestados,
                        atendendo a todas as normas técnicas e de segurança
                        vigentes. Os nossos valores estão pautados na confiança,
                        transparência e respeito.
                    </p>

                    <div className="hidden  items-center justify-center py-6 px-4 gap-3 max-w-[1400px] lg:grid lg:grid-cols-2 lg:text-2xl lg:px-0 lg:gap-6 z-30">
                        <Link href="# " className=" ">
                            <a className="flex text-center items-center justify-center py-2  bg-[#00324b] text-[#ffaa00] font-bold rounded border-2 border-[#00324b] lg:px-6">
                                Contato
                            </a>
                        </Link>

                        <Link href="#work-numbers" className="">
                            <a className=" items-start py-2 px-6 bg-[white] text-[#00324b] font-bold rounded border-2 border-transparent whitespace-nowrap hidden sm:flex">
                                Saiba mais →
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
