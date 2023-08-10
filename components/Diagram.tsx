import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

function Diagram(props: any) {
  const animation = useAnimation();
  const [order, setOrder] = useState(0);

  async function sequence() {
    await animation.start({
      y: -20,
      scale: 1.1,
      backgroundColor: '#ffaa00',
    });

    setOrder((currState) => currState + 1);
  }

  useEffect(() => {
    if (order > 5) {
      setOrder(0);
    } else {
      sequence();
    }
  }, [order]);

  return (
    <div
      className="bg-white pb-10 scroll-mt-[4.5rem] lg:scroll-mt-14"
      id="como-funciona"
    >
      <div className="flex flex-col p-4 gap-6  lg:max-w-[800px] lg:mx-auto">
        <h1 className="text-2xl font-bold">Como Funciona:</h1>
        <div
          className="grid grid-cols-2 gap-5  text-[#00324b] justify-center md:grid-cols-2  
        md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-12"
        >
          {props.data.map(
            (stage: {
              name: string;
              pathStart: string;
              pathEnd: string;
              text: string;
              start: number;
              icon?: any;
            }) => (
              <motion.div
                key={stage.name}
                className="relative grid grid-rows-2 border border-[#00324b] rounded-2xl 
                 py-3 px-2  gap-3 text-center   place-items-center lg:grid-rows-[2fr,3fr] lg:py-6 lg:px-4"
                animate={stage.start == order ? animation : ''}
                transition={{
                  duration: 1,
                  repeat: 1,
                  repeatType: 'reverse',
                }}
                // onViewportEnter={async () => {
                //   if (!animationStart) {
                //     sequence();
                //     setAnimationStart(true);
                //   }
                // }}
              >
                <div className="absolute top-2 left-2">{stage.start + 1}</div>
                <div className="h-20 w-20 relative before ">
                  {props.Image && (
                    <Image
                      src={stage.pathStart}
                      alt={stage.name}
                      layout="fill"
                    ></Image>
                  )}
                  {props.Icon && stage.icon}
                </div>
                <p className="font-medium">{stage.text}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Diagram;
