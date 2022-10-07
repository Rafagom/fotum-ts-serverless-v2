import Image from "next/image";

function AboutEngineer() {
    return (
        <>
            {/* About the engineer */}
            <div className="grid grid-cols-[4fr,2fr]">
                <div className="flex items-center place-self-start rounded-3xl col-start-2 row-start-1">
                    <video
                        className="rounded-3xl"
                        autoPlay
                        loop
                        style={{
                            // width: "700px",
                            height: "600px",
                        }}
                        src="/VideoInsta1.mp4"
                    ></video>
                </div>

                <div
                    className=" flex flex-col gap-3 px-4 pt-20 items-center justify-center lg:grid lg:grid-cols-2 lg:gap-0 md:mx-auto  border-2 rounded-3xl lg:max-w-3xl lg:pb-10 md:col-start-1 md:row-start-1"
                    data-aos="fade-left"
                >
                    {/* <h1 className="text-3xl font-extrabold text-center lg:col-start-1 col-span-2">
                    Sobre o Engenheiro
                </h1> */}
                    <div className="lg:relative col-start-2">
                        <div className="flex flex-col items-center justify-center lg:rounded-full lg:z-10 lg:absolute lg:top-[-210px]  lg:left-[-100px] lg:row-start-1">
                            <Image
                                className="rounded-full shadow-md"
                                src={"/engLucas.jpg"}
                                width={200}
                                height={200}
                                alt="Engenheiro Lucas"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:col-span-2">
                        <h2 className="text-2xl font-bold text-center ">
                            Eng. Lucas Marcelo de Deus <br />{" "}
                            <span className="text-lg font-normal">
                                CREA: 123456
                            </span>
                        </h2>
                        <p className="text-justify text-xl px-6">
                            Formado em Engenharia Elétrica pela Universidade
                            Federal de Santa Catarina – UFSC, com enfoque em
                            sistemas de energia e energia solar fotovoltaica,
                            atua com projetos elétricos e instalações
                            residenciais, comerciais e prediais há mais de 10
                            anos. Além da experiência com energias renováveis,
                            também foi encarregado pela a medição e
                            contabilização de energia em usinas de todo o
                            Brasil, sendo responsável pelas questões
                            regulatórias junto à Câmara de Comercialização de
                            Energia Elétrica – CCEE e Operador Nacional do
                            Sistema Elétrico – ONS.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutEngineer;
