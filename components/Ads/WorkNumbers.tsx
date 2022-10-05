// @ts-ignore
import AnimatedNumber from "react-animated-number";

function WorkNumbers() {
    return (
        <div id="work-numbers" className="">
            <div className="work-numbers flex flex-col gap-6  text-[#00324b] px-10 py-8  lg:grid lg:grid-cols-3 lg:max-w-[1400px] lg:mx-auto">
                <div className="flex flex-col items-center justify-center border-2 border-[#00324b] rounded-3xl p-2">
                    <AnimatedNumber
                        style={{
                            transition: "0.8s ease-out",
                            transitionProperty: "background-color, color",
                            fontSize: 36,
                            fontWeight: 500,
                        }}
                        duration={3000}
                        stepPrecision={0}
                        value={100}
                        formatValue={(n: number) =>
                            `+${n.toLocaleString("pt-BR")} `
                        }
                    />
                    <p className="text-2xl text-[#00324b]">
                        Clientes satisfeitos
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center border-2 border-[#00324b] rounded-3xl p-2">
                    <AnimatedNumber
                        style={{
                            transition: "0.8s ease-out",
                            transitionProperty: "background-color, color",
                            fontSize: 36,
                            fontWeight: 500,
                        }}
                        duration={3000}
                        stepPrecision={0}
                        value={7200}
                        formatValue={(n: number) =>
                            `${n.toLocaleString("pt-BR")} Mwh`
                        }
                    />
                    <p className="text-2xl text-[#00324b]">Energia Gerada</p>
                </div>

                <div className="flex flex-col items-center justify-center border-2 border-[#00324b] rounded-3xl p-2">
                    <AnimatedNumber
                        style={{
                            transition: "0.8s ease-out",
                            transitionProperty: "background-color, color",
                            fontSize: 36,
                            fontWeight: 500,
                        }}
                        duration={3000}
                        stepPrecision={0}
                        value={6984000}
                        formatValue={(n: number) =>
                            `R$ ${n.toLocaleString("pt-BR")}`
                        }
                    />
                    <p className="text-2xl text-[#00324b]">Economizados</p>
                </div>
            </div>
        </div>
    );
}

export default WorkNumbers;
