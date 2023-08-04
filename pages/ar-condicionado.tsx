import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { WhatsappLogo } from 'phosphor-react';
import About from '../components/Ads/AboutEngineer';
import Advantages from '../components/Ads/SolarAdvantages';
import WorkNumbers from '../components/Ads/WorkNumbers';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Diagram from '../components/Diagram';
import {
  ThermometerCold,
  Wrench,
  Snowflake,
  Plug,
  Ladder,
  Repeat,
} from 'phosphor-react';

const SolarGeneration: NextPage = () => {
  const airConditioningServices: {
    name: string;
    icon: any;
    pathEnd: string;
    text: string;
    start: number;
  }[] = [
    {
      name: 'Instalação padrão',
      icon: <Snowflake size={64} />,
      pathEnd: '/standardInstallation.png',
      start: 0,

      text: 'Instalação padrão de ar condicionado',
    },
    {
      name: 'Instalação especializada',
      icon: <Plug size={64} />,
      pathEnd: '/specializedInstallation.png',
      start: 1,

      text: 'Instalação especializada de ar condicionado',
    },
    {
      name: 'Manutenção preventiva',
      icon: <Wrench size={64} />,
      pathEnd: '/maintenance.png',
      start: 2,

      text: 'Manutenção preventiva de sistemas de ar condicionado',
    },
    {
      name: 'Instalações com rapel',
      icon: <Ladder size={64} />,
      pathEnd: '/rapelInstallation.png',
      start: 3,

      text: 'Instalações de ar condicionado realizadas com rapel',
    },
    {
      name: 'Upgrade e substituição',
      icon: <Repeat size={64} />,
      pathEnd: '/upgrade.png',
      start: 4,

      text: 'Upgrade, substituição e otimização de sistemas de ar condicionado',
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Com mais de 10 anos de experiência em serviços elétricos de excelência, oferecendo as melhores soluções em projetos, instalações e energia solar fotovoltaica."
        />
        <title>Fótum Engenharia | Energia Solar</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Header />
      <div className="sm:bg-[url('/CME5.png')] bg-no-repeat bg-cover bg-center  relative">
        <div className="hidden absolute opacity-40 bg-[#6b92a7] h-full w-full z-10 rounded-none lg:rounded-l-3xl top-0 lg:block"></div>
        <div
          className="hidden lg:flex absolute right-0 bottom-0  z-10 xl:right-[calc(100vw/12)]"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Image
            src={'/engLucasNoBg.svg'}
            width={420}
            height={680}
            alt={'Geração residencial'}
          />
        </div>
        <div className="flex flex-col p-4 mb-6 lg:max-w-[1600px] lg:mx-auto lg:px-24 mt-24 justify-center h-full">
          <div className="flex flex-col gap-8 sm:bg-white max-w-[600px] px-8 py-5 rounded-3xl opacity-95 z-20 sm:py-10">
            <div className="flex flex-col gap-4 max-w-3xl opacity-100">
              <p className="text-xl lg:text-2xl">Fale com nosso</p>
              <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">
                Técnico especialista em <br />
                <span className="text-[#ffaa00]">
                  projetos e instalações solares.
                </span>
              </h2>
              <p className="text-xl md:text-2xl max-w-[40ch]">
                Receba agora atendimento personalizado do nosso técnico,
                especializado em instalações de ar condicionado em todos os dias
                da semana!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 justify-start items-center sm:flex-row">
                <a
                  href="https://wa.me/message/2KTISK2P7CG6E1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl md:text-lg hover:bg-green-200 w-fit"
                >
                  <WhatsappLogo size={28} />
                  <p>Falar com o engenheiro</p>
                </a>
                <a href="tel:48984110903" className="text-center">
                  (48) 98411-0903
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[7vh] sm:h-[11vh] md:h-[15vh] w-full"></div>
        <div className="w-full flex items-center justify-center absolute bottom-3 pt-10 ">
          <a
            href="#resultados"
            className="h-full relative flex flex-col gap-2 justify-center items-center font-bold uppercase text-center text-xl z-20 sm:border-2  sm:border-[#00324b] w-min px-8 pb-14 pt-4 sm:bg-white rounded-3xl sm:bounce hover:bg-[#ddad4e]"
          >
            <p className="  whitespace-nowrap ">Ver mais</p>
            <div className="flex absolute bottom-24 items-center justify-center">
              <div className="chevron "></div>
              <div className="chevron "></div>
              <div className="chevron "></div>
            </div>
          </a>
        </div>
      </div>
      <Diagram data={airConditioningServices} Icon />
      <WorkNumbers />
      <Advantages />
      <div className="pt-48 pb-10">
        <About />
      </div>
      <Footer />
    </>
  );
};
export default SolarGeneration;
