import Image from 'next/image';
import {
  motion,
  Variants,
  useTime,
  useTransform,
  useAnimation,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const solarFlux: {
  name: string;
  pathStart: string;
  pathEnd: string;
  text: string;
  start: number;
}[] = [
  {
    name: 'Sol',
    pathStart: '/sol.png',
    pathEnd: '/solEnd.png',
    start: 0,

    text: 'A luz do sol chega até os painéis.',
  },
  {
    name: 'Painel Solar',
    pathStart: '/solarPanel.png',
    pathEnd: 'solarPanelEnd.png',
    start: 1,

    text: 'Os painéis geram corrente contínua.',
  },
  {
    name: 'Inversor',
    pathStart: '/gerador.png',
    pathEnd: '/geradorEnd.png',
    start: 2,

    text: ' Os inversores transformam corrente contínua em alternada.',
  },
  {
    name: 'Cozinha',
    pathStart: '/cozinha.png',
    pathEnd: '/cozinhaEnd.png',
    start: 3,

    text: 'Os equipamentos elétricos usam a energia solar.',
  },
  {
    name: 'Sustentabilidade',
    pathStart: '/sustentabilidade.png',
    pathEnd: '/sustentabilidadeEnd.png',
    start: 4,

    text: '  A energia não utilizada é devolvida gerando desconto na conta.',
  },
  {
    name: 'Investir',
    pathStart: '/investir.png',
    pathEnd: '/investirEnd.png',
    start: 5,

    text: 'E é assim que você pode economizar até 95% da conta.',
  },
];

function SolarDiagram() {
  const animation = useAnimation();

  const [order, setOrder] = useState(0);
  const [animationStart, setAnimationStart] = useState(false);

  async function sequence() {
    await animation.start({
      y: -20,
      scale: 1.1,
      backgroundColor: '#ffaa00',
    });

    setOrder(order + 1);
  }

  useEffect(() => {
    if (!(order <= 5)) {
      setOrder(0);
    } else {
      sequence();
    }
  }, [order]);

  return (
    <div className="bg-white pb-10">
      <div className="flex flex-col p-4 gap-6  lg:max-w-[800px] lg:mx-auto">
        <h1 className="text-2xl font-bold">Como Funciona:</h1>
        <div className="grid grid-cols-2 gap-5  text-[#00324b] justify-center md:grid-cols-2  md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-12">
          {solarFlux.map((stage) => (
            <motion.div
              key={stage.name}
              className="relative grid grid-rows-2 border border-[#00324b] rounded-2xl  py-3 px-2  gap-3 text-center   place-items-center lg:grid-rows-[2fr,3fr]   lg:py-6 lg:px-4"
              animate={stage.start == order ? animation : ''}
              transition={{
                duration: 1,
                repeat: 1,
                repeatType: 'reverse',
              }}
              onViewportEnter={async () => {
                if (!animationStart) {
                  sequence();
                  setAnimationStart(true);
                }
              }}
            >
              <div className="absolute top-2 left-2">{stage.start + 1}</div>
              <div className="h-20 w-20 relative before ">
                <Image
                  src={stage.pathStart}
                  alt={stage.name}
                  layout="fill"
                ></Image>
              </div>
              <p className=" font-medium">{stage.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SolarDiagram;
