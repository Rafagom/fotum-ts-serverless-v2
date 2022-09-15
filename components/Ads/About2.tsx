import Image from "next/image";

function About() {
    return (
        <>
            {/* About the engineer */}
            <div className="flex flex-col gap-3 p-4 items-center justify-center lg:grid lg:grid-cols-[6fr,4fr] lg:gap-x-6 lg:max-w-[1400px] lg:mx-auto">
                <h1 className="text-3xl font-extrabold text-center lg:col-start-1">
                    Sobre o Engenheiro
                </h1>

                <div className="flex items-center justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2">
                    <Image
                        className=" rounded-full"
                        src={"/engLucas.jpg"}
                        width={200}
                        height={200}
                        alt="Engenheiro Lucas"
                    />
                </div>

                <h2 className="text-2xl font-bold text-center lg:col-start-2">
                    Eng. Lucas Marcelo de Deus <br />{" "}
                    <span className="text-lg font-normal">CREA: 123456</span>
                </h2>
                <p className="text-center text-xl lg:col-start-1 lg:row-start-2">
                    Formado em Engenharia Elétrica pela Universidade Federal de
                    Santa Catarina – UFSC, com enfoque em sistemas de energia e
                    energia solar fotovoltaica, atua com projetos elétricos e
                    instalações residenciais, comerciais e prediais há 10 anos.
                    Além da experiência com energias renováveis, também foi
                    encarregado pela a medição e contabilização de energia em
                    usinas de todo o Brasil, sendo responsável pelas questões
                    regulatórias junto à Câmara de Comercialização de Energia
                    Elétrica – CCEE e Operador Nacional do Sistema Elétrico –
                    ONS.
                </p>

                <hr className=" w-[75%] mx-auto bg-[#00324b] text-[#00324b] border-t-[#00324b] lg:row-start-3" />
                {/* About the company */}
                <h1 className="text-3xl font-extrabold text-center lg:col-start-1">
                    Sobre a Empresa
                </h1>

                <div className="flex items-center justify-center lg:hidden">
                    <Image
                        className=" rounded-full"
                        src={"/engLucas.jpg"}
                        width={200}
                        height={200}
                        alt="Engenheiro Lucas"
                    />
                </div>

                <h2 className="text-2xl font-bold text-center lg:col-start-2">
                    Fótum Engenharia
                </h2>
                <p className="text-center text-xl lg:col-start-1">
                    A Fótum Engenharia conta com mais de 10 anos de experiência
                    em serviços elétricos de excelência, oferecendo as melhores
                    soluções em projetos, instalações e energia solar
                    fotovoltaica. Com equipe especializada e altamente
                    capacitada, oferecemos segurança e garantia em todos os
                    serviços prestados, atendendo à todas as normas técnicas e
                    de segurança vigente. Os nossos valores estão pautados na
                    confiança, transparência e respeito.
                </p>

                <a
                    href="https://wa.me/message/2KTISK2P7CG6E1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-4 mt-6"
                >
                    <div className="flex items-center justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl text-lg hover:bg-green-200">
                        Falar com um especialista
                    </div>
                </a>
            </div>
        </>
    );
}

export default About;
