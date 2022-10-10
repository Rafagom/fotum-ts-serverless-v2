import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <div className="flex flex-col gap-12  mb-5 max-w-[1400px] mx-auto sm:h-[60vh]">
            <div className="md:grid md:grid-cols-2 md:gap-x-24 items-center justify-center h-full">
                <div className="flex justify-center items-center md:col-start-2 w-full  rounded-l-3xl">
                    <div
                        className="hidden sm:flex shadow-lg right-0 bottom-auto  rounded-l-3xl absolute"
                        data-aos="fade-left"
                    >
                        <div className="opacity-40 bg-[#6b92a7] h-full w-full absolute z-10 rounded-l-3xl"></div>
                        <Image
                            className=" rounded-l-3xl"
                            src={"/CME5.png"}
                            // layout="fill"
                            width={800}
                            height={500}
                            alt={"Geração residencial"}
                        />
                        <div
                            className="flex  absolute right-0 bottom-0 z-20"
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
                    className="flex flex-col justify-center items-center gap-6 md:row-start-1 md:gap-10 md:h-full "
                    data-aos="zoom-y-out"
                >
                    <h2 className="text-3xl font-bold text-center md:text-left md:text-5xl  ">
                        Qualidade e Garantia <br /> Fótum Engenheria
                    </h2>
                    <p className="px-4 text-lg md:text-3xl md:px-0">
                        Mais de 10 anos de experiência em serviços elétricos de
                        excelência, oferecendo as melhores soluções em projetos,
                        instalações e energia solar fotovoltaica.
                    </p>

                    <div className="hidden  items-center justify-center py-6 px-4 gap-3 max-w-[1400px] sm:grid sm:grid-cols-2 md:text-2xl md:px-0 md:gap-6">
                        <Link href="# " className=" ">
                            <a className="flex text-center items-center justify-center py-2  bg-[#00324b] text-[#ffaa00] font-bold rounded border-2 border-[#00324b] md:px-6">
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
