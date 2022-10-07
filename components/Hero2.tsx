import Link from "next/link";
import Image from "next/image";

export function Hero2() {
    return (
        <div className="flex flex-col gap-12  mb-5 max-w-[1400px] mx-auto h-[60vh]">
            <div className="md:grid md:grid-cols-2 md:gap-x-24 items-center justify-center h-full">
                <div className="flex justify-center items-center md:col-start-1 w-full  rounded-l-3xl">
                    <div
                        className="flex absolute shadow left-0 top-auto  rounded-r-3xl "
                        data-aos="fade-right"
                    >
                        <Image
                            className=" rounded-r-3xl"
                            src={"/Sandro.jpeg"}
                            width={800}
                            height={500}
                            alt={"Geração residencial"}
                        />
                    </div>
                </div>

                <div
                    className=" md:flex md:flex-col md:gap-10 md:h-full flex justify-center items-center"
                    data-aos="zoom-y-out"
                >
                    <p className="px-4 text-3xl md:px-0">
                        Equipe especializada e altamente capacitada, oferecemos
                        segurança e garantia em todos os serviços prestados,
                        atendendo à todas as normas técnicas e de segurança
                        vigente. Os nossos valores estão pautados na confiança,
                        transparência e respeito.
                    </p>

                    <div className="grid grid-cols-1 gap-6 px-4  max-w-[1400px] text-xl">
                        <Link href="#work-numbers">
                            <a className="flex  items-start py-2 px-6 bg-[white] text-[#00324b] font-bold rounded border-2 border-transparent ">
                                Saiba mais →
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
