import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <div className="flex flex-col gap-12 mb-5  mx-auto  md:min-h-[500px] md:h-full items-center justify-center px-6 ">
            <div className="items-center justify-center h-full  md:grid md:grid-cols-2 md:gap-x-16 xl:gap-x-24 w-full">
                <div className="hidden justify-center items-center rounded-3xl mb-5 sm:flex md:hidden ">
                    <Image
                        className="rounded-3xl"
                        src={"/CME5.png"}
                        width={500}
                        height={300}
                        alt={"Geração residencial"}
                    />
                </div>

                <div className="hidden justify-center items-center md:grid md:col-start-2 w-full rounded-l-3xl">
                    <div className="relative flex ">
                        <div
                            className="flex  shadow rounded-none md:rounded-l-3xl"
                            data-aos="fade-left"
                        >
                            <div className="absolute opacity-20 bg-[#6b92a7] h-full w-full z-10 rounded-none md:rounded-l-3xl top-0 "></div>

                            <div className="flex shadow rounded-l-3xl  w-[49vw] md:h-[40vh] lg:h-[47vh] xl:h-[55vh]">
                                <Image
                                    className="rounded-none md:rounded-l-3xl"
                                    src={"/CME5.png"}
                                    layout="fill"
                                    alt={"Geração residencial"}
                                />
                            </div>

                            <div
                                className="flex absolute right-0 bottom-0  z-10 w-[20vw] md:h-[28.5vh] lg:h-[38vh] xl:h-[47vh] 2xl:h-[55vh]"
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                <Image
                                    src={"/engLucasNoBg.svg"}
                                    layout="fill"
                                    alt={"Geração residencial"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className=" flex flex-col max-w-[700px] place-self-end md:gap-10 md:h-full  justify-center items-center md:row-start-1"
                    data-aos="zoom-y-out"
                >
                    <p className="px-4 text-lg md:text-xl lg:text-2xl xl:text-3xl md:px-0">
                        Com mais de 10 anos de experiência em serviços elétricos
                        de excelência, oferecendo as melhores soluções em
                        projetos, instalações e energia solar fotovoltaica.
                    </p>

                    <div className="hidden  items-center justify-center py-6 px-4 gap-3 max-w-[1400px] md:grid md:grid-cols-2 lg:text-2xl lg:px-0 lg:gap-6 z-30">
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
