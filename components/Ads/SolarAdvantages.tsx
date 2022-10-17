import {
    CurrencyCircleDollar,
    HouseLine,
    Lightbulb,
    Medal,
} from "phosphor-react";

export default function SolarAdvantages() {
    return (
        <div className="bg-gray-200">
            <div className="flex flex-col p-4 gap-8  lg:max-w-[1400px] lg:mx-auto">
                {/* -- Mobile -- */}
                <div className="grid grid-rows-4 gap-5  text-[#ffaa00] mt-6 justify-center md:grid-cols-2  md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
                    <div className="grid grid-cols-[2fr,8fr] px-8 py-4  gap-4 items-center justify-start bg-[#00324b] rounded-full lg:flex lg:flex-col lg:text-center lg:py-12 lg:rounded-3xl">
                        <HouseLine size={72} weight="thin" />
                        <p>
                            Valorização do imóvel e rápido retorno de
                            investimento
                        </p>
                    </div>
                    <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full lg:flex lg:flex-col lg:text-center lg:py-12 lg:rounded-3xl">
                        <Medal size={72} weight="thin" />
                        <p>
                            Tecnologia de microinversores com até 25 anos de
                            garantia
                        </p>
                    </div>
                    <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full lg:flex lg:flex-col lg:text-center lg:py-12 lg:rounded-3xl">
                        <Lightbulb size={72} weight="thin" />
                        <p>Até 95% de economia na conta de energia </p>
                    </div>
                    <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full lg:flex lg:flex-col lg:text-center lg:py-12 lg:rounded-3xl">
                        <CurrencyCircleDollar size={72} weight="thin" />

                        <p>Parcele em até 72x, sem entrada</p>
                    </div>
                </div>

                {/* <div className="md:grid  grid-cols-2 justify-end hidden   gap-5  text-[#ffaa00] mt-6">
                <div className="grid grid-cols-[2fr,8fr] px-8 py-4  gap-4 items-center justify-start bg-[#00324b] rounded-full">
                    <HouseLine size={72} weight="thin" />
                    <p>
                        Valorização do imóvel e rápido retorno de investimento
                    </p>
                </div>
                <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full">
                    <Medal size={72} weight="thin" />
                    <p>
                        Tecnologia de microinversores com até 25 anos de
                        garantia
                    </p>
                </div>
                <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full">
                    <Lightbulb size={72} weight="thin" />
                    <p className="w-[16ch]">
                        Até 95% <br />
                        de economia na conta de energia{" "}
                    </p>
                </div>
                <div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full">
                    <CurrencyCircleDollar size={72} weight="thin" />

                    <p className="w-[16ch]">Parcele em até 72x, sem entrada</p>
                </div>
            </div> */}
                <a
                    href="https://wa.me/message/2KTISK2P7CG6E1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-4 mt-6"
                >
                    <div className="flex items-center justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl text-lg hover:bg-green-200">
                        Falar com o engenheiro agora!
                    </div>
                </a>
            </div>
        </div>
    );
}
