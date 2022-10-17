import Link from "next/link";
import Image from "next/image";

export function Hero2() {
    return (
        <div className="flex flex-col gap-12 mb-5 max-w-[1400px] mx-auto  md:min-h-[500px] h-full px-6">
            <div className="md:grid md:grid-cols-2 md:gap-x-24 items-center justify-center h-full">
                <div className="hidden  justify-center items-center md:grid md:col-start-1 w-full rounded-r-3xl">
                    <div
                        className="flex absolute shadow left-0 top-auto rounded-r-3xl w-[49vw] md:h-[40vh] lg:h-[47vh] xl:h-[55vh]"
                        data-aos="fade-right"
                    >
                        <div className="absolute opacity-20 bg-[#6b92a7] h-full w-full z-10 rounded-none md:rounded-r-3xl top-0 "></div>
                        <Image
                            className=" rounded-r-3xl"
                            src={"/Sandro.jpeg"}
                            layout="fill"
                            // width={800}
                            // height={500}
                            alt={"Geração residencial"}
                        />
                    </div>
                </div>
                <div
                    className=" flex flex-col  md:gap-10 md:h-full justify-center items-center"
                    data-aos="zoom-y-out"
                >
                    <p className="px-4 text-lg md:text-xl lg:text-2xl xl:text-3xl md:px-0">
                        Equipe especializada e altamente capacitada, oferecemos
                        segurança e garantia em todos os serviços prestados,
                        atendendo à todas as normas técnicas e de segurança
                        vigente. Os nossos valores estão pautados na confiança,
                        transparência e respeito.
                    </p>

                    <div className=" grid-cols-1 gap-6 px-4  max-w-[1400px] lg:text-2xl hidden md:grid">
                        <Link href="#work-numbers">
                            <a className="items-start py-2 px-6 bg-[white] text-[#00324b] font-bold rounded border-2 border-transparent whitespace-nowrap hidden sm:flex">
                                Saiba mais →
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
