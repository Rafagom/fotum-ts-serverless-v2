import Image from "next/image";

function AboutCompany() {
    return (
        <>
            {/* About the engineer */}
            <div className="flex flex-col gap-3 p-4 items-center justify-center max-w-lg mx-auto">
                {/* About the company */}
                <h1 className="text-3xl font-extrabold text-center lg:col-start-1">
                    Sobre a Empresa
                </h1>

                <div className="flex items-center justify-center">
                    <Image
                        src={"/logo.png"}
                        width={320}
                        height={120}
                        alt="Engenheiro Lucas"
                    />
                </div>

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
            </div>
        </>
    );
}

export default AboutCompany;
