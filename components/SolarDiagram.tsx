import Image from "next/image";
import { motion, Variants } from "framer-motion";

// interface Props {
//     emoji: string;
//     hueA: number;
//     hueB: number;
// }

// const cardVariants: Variants = {
//     offscreen: {
//         y: 10,
//     },
//     onscreen: {
//         y: 10,
//         rotate: 0,
//         transition: {
//             // type: "spring",
//             // bounce: 0.4,
//             duration: 3,
//         },
//     },
// };

const solarFlux: {
    name: string;
    pathStart: string;
    pathEnd: string;
    text: string;
    start: number;
    end: number;
}[] = [
    {
        name: "Sol",
        pathStart: "/sol.png",
        pathEnd: "/solEnd.png",
        start: 0,
        end: 2,
        text: "A luz do sol chega até os painéis.",
    },
    {
        name: "Painel Solar",
        pathStart: "/solarPanel.png",
        pathEnd: "solarPanelEnd.png",
        start: 0,
        end: 2,
        text: "Os painéis geram corrente contínua.",
    },
    {
        name: "Inversor",
        pathStart: "/gerador.png",
        pathEnd: "/geradorEnd.png",
        start: 0,
        end: 2,
        text: " Os inversores transformam corrente contínua em alternada.",
    },
    {
        name: "Cozinha",
        pathStart: "/cozinha.png",
        pathEnd: "/cozinhaEnd.png",
        start: 0,
        end: 2,
        text: "Os equipamentos elétricos usam a energia solar.",
    },
    {
        name: "Sustentabilidade",
        pathStart: "/sustentabilidade.png",
        pathEnd: "/sustentabilidadeEnd.png",
        start: 0,
        end: 2,
        text: "  A energia não utilizada é devolvida gerando desconto na conta.",
    },
    {
        name: "Investir",
        pathStart: "/investir.png",
        pathEnd: "/investirEnd.png",
        start: 0,
        end: 2,
        text: "E é assim que você pode economizar até 95% da conta.",
    },
];

function SolarDiagram() {
    return (
        <div className="bg-white">
            <div className="flex flex-col p-4 gap-8  lg:max-w-[800px] lg:mx-auto">
                <motion.div
                    className="grid grid-rows-4 gap-5  text-[#00324b] mt-6 justify-center md:grid-cols-2  md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-12"
                    // initial="offscreen"
                    // whileInView="onscreen"
                    viewport={{ amount: 0.8 }}
                >
                    {solarFlux.map((stage) => (
                        <motion.div
                            key={stage.name}
                            className="border border-[#00324b] rounded-2xl   py-6 px-4 gap-3 text-center  grid grid-rows-[2fr,3fr]  place-items-center"
                            // initial={{ scale: 0.9 }}
                            animate={{
                                y: -20,
                                color: "#ffaa00",
                                borderColor: "#ffaa00",
                            }}
                            transition={{ duration: 3 }}
                            viewport={{ amount: 0.8 }}
                        >
                            <div className="h-20 w-20 relative">
                                <Image
                                    // className="h-[60px] w-[60px]"
                                    src={stage.pathStart}
                                    alt={stage.name}
                                    // height={60}
                                    // width={60}
                                    layout="fill"
                                ></Image>
                            </div>
                            <p className="font-semibold">{stage.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default SolarDiagram;
