import Image from "next/image";

function About() {
    return (
        <>
            {/* About the engineer */}
            <div className="flex flex-col gap-3 p-4">
                <h1 className="text-3xl font-extrabold text-center">
                    Sobre o Engenheiro
                </h1>

                <div className="flex items-center justify-center">
                    <Image
                        className=" rounded-full"
                        src={"/engLucas.jpg"}
                        width={200}
                        height={200}
                        alt="Engenheiro Lucas"
                    />
                </div>

                <hr />
                <h2 className="text-2xl font-bold text-center">
                    Eng. Lucas Marcelo de Deus
                </h2>
                <p className="text-center text-xl">
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
            </div>

            {/* About the company */}
            <div className="flex flex-col gap-3 p-4 bg-gray-200">
                <h1 className="text-3xl font-extrabold text-center">
                    Sobre a Empresa
                </h1>

                <div className="flex items-center justify-center">
                    <Image
                        className=" rounded-full"
                        src={"/engLucas.jpg"}
                        width={200}
                        height={200}
                        alt="Engenheiro Lucas"
                    />
                </div>

                <hr className="bg-[#00324b]" />
                <h2 className="text-2xl font-bold text-center">
                    Fótum Engenharia
                </h2>
                <p className="text-center text-xl">
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
