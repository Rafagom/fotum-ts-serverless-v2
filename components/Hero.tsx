import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <div className="flex flex-col gap-6  mt-4 mb-5 max-w-[1400px] mx-auto">
            <div className="md:grid md:grid-cols-2 ">
                <div className="flex justify-center items-center md:col-start-2 w-full ">
                    <div className=" h-[40vh]  flex">
                        <Image
                            // className="bounce"
                            className="top-0"
                            src={"/Sandro.jpeg"}
                            // layout="fill"
                            width={600}
                            height={600}
                            alt={"Geração residencial"}
                        />
                    </div>
                </div>

                <div className="md:row-start-1">
                    <p className="px-4">
                        A Fótum Engenharia conta com mais de 10 anos de
                        experiência em serviços elétricos de excelência,
                        oferecendo as melhores soluções em projetos, instalações
                        e energia solar fotovoltaica.
                    </p>

                    <p className="px-4">
                        Com equipe especializada e altamente capacitada,
                        oferecemos segurança e garantia em todos os serviços
                        prestados, atendendo à todas as normas técnicas e de
                        segurança vigente. Os nossos valores estão pautados na
                        confiança, transparência e respeito.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 px-4  max-w-[1400px]">
                <Link href="# " className=" ">
                    <a className="flex text-center items-center justify-center py-2 bg-[#00324b] text-[#ffaa00] font-bold rounded border-2 border-[#00324b] ">
                        Orçamento
                    </a>
                </Link>
                <Link href="#work-numbers">
                    <a className="flex  items-start py-2  bg-[white] text-[#00324b] font-bold rounded border-2 border-transparent ">
                        Saiba mais →
                    </a>
                </Link>
            </div>
        </div>
    );
}
