import Image from "next/image";

function AboutEngineer() {
    return (
        <>
            {/* About the engineer */}
            <div className="flex">
                <div
                    className="  gap-3 px-4 pt-10 pb-6 items-center justify-center max-w-[340px] mx-auto sm:mx-0 grid grid-cols-2 lg:gap-0 md:mx-auto  border-2 rounded-3xl lg:max-w-lg lg:pb-10 md:col-start-1 md:row-start-1"
                    data-aos="fade-left"
                >
                    {/* <h1 className="text-3xl font-extrabold text-center lg:col-start-1 col-span-2">
                    Sobre o Engenheiro
                </h1> */}
                    <div className="relative col-start-2">
                        <div className="flex flex-col items-center justify-center rounded-full lg:z-10 absolute top-[-200px] sm:top-[-210px]  left-[-100px] row-start-1">
                            <Image
                                className="rounded-full shadow-md"
                                src={"/engLucas.jpg"}
                                width={200}
                                height={200}
                                alt="Engenheiro Lucas"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 col-span-2">
                        <h2 className="text-2xl font-bold text-center ">
                            Eng. Lucas Marcelo de Deus <br />{" "}
                            <span className="text-lg font-normal">
                                CREA: 184.434-3
                            </span>
                        </h2>
                        <div className="flex flex-col gap-3 text-center  text-xl px-6">
                            <p>
                                Formado em Engenharia Elétrica pela Universidade
                                Federal de Santa Catarina – UFSC, com enfoque em
                                sistemas de energia e energia solar
                                fotovoltaica, atua com projetos elétricos e
                                instalações residenciais, comerciais e prediais
                                há mais de 10 anos.
                            </p>

                            <p>
                                Além da experiência com energias renováveis,
                                também foi encarregado pela a medição e
                                contabilização de energia em usinas de todo o
                                Brasil, sendo responsável pelas questões
                                regulatórias junto à Câmara de Comercialização
                                de Energia Elétrica – CCEE e Operador Nacional
                                do Sistema Elétrico – ONS.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center col-span-2 mt-4">
                        <a
                            href="https://wa.me/message/2KTISK2P7CG6E1"
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col gap-4 mt-6"
                        >
                            <div className="flex items-center justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl text-lg hover:bg-green-200 w-fit ">
                                Falar com o especialista
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutEngineer;
