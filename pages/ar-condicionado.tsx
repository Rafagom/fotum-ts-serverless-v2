import { NextPage } from 'next';
import Head from 'next/head';
import { LadderSimple, ShieldCheck, WhatsappLogo } from 'phosphor-react';
import About from '../components/Ads/AboutEngineer';
import Advantages from '../components/Ads/SolarAdvantages';
import WorkNumbers from '../components/Ads/WorkNumbers';
import { Footer } from '../components/Footer';
import Diagram from '../components/Diagram';
import { Wrench, Snowflake, Repeat } from 'phosphor-react';
import { SpecialistInformation } from '../components/SpecialistInformation';

const AirConditioningServices: NextPage = () => {
  const airConditioningServices: {
    name: string;
    icon: any;
    pathEnd: string;
    text: string;
    start: number;
  }[] = [
    {
      name: 'Instalação padrão',
      icon: <ShieldCheck size={64} />,
      pathEnd: '/standardInstallation.png',
      start: 0,

      text: 'Instalação padrão de ar condicionado',
    },
    {
      name: 'Instalação especializada',
      icon: <Snowflake size={64} />,
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
      icon: <LadderSimple size={64} />,
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
      <SpecialistInformation
        data={{
          specialist: 'Técnico ',
          specialty: 'instalação de sistemas de ar condicionado.',
          text: 'Receba agora atendimento personalizado do nosso técnico especializado em instalações de ar condicionado em todos os dias da semana!',
        }}
      />
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
export default AirConditioningServices;
