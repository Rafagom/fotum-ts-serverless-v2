import { NextPage } from 'next';
import Head from 'next/head';
import {
  HouseLine,
  Lightbulb,
  Lightning,
  ListChecks,
  NotePencil,
  Plug,
  WhatsappLogo,
} from 'phosphor-react';
import About from '../components/Ads/AboutEngineer';
import GeneralAdvantages from '../components/Ads/GeneralAdvantages';
import WorkNumbers from '../components/Ads/WorkNumbers';
import { Footer } from '../components/Footer';
import Diagram from '../components/Diagram';
import { SpecialistInformation } from '../components/SpecialistInformation';

const SolarGeneration: NextPage = () => {
  const solarFlux: {
    name: string;
    icon: any;
    pathEnd: string;
    text: string;
    start: number;
  }[] = [
    {
      name: 'Projeto elétricos',
      icon: <NotePencil size={64} />,
      pathEnd: '/solEnd.png',
      start: 0,

      text: 'Projeto elétricos',
    },
    {
      name: 'Instalações elétricas',
      icon: <Plug size={64} />,
      pathEnd: 'solarPanelEnd.png',
      start: 1,

      text: 'Instalações elétricas',
    },
    {
      name: 'Execução de projetos',
      icon: <ListChecks size={64} />,
      pathEnd: '/geradorEnd.png',
      start: 2,

      text: 'Execução de projetos',
    },
    {
      name: 'Poste CELESC',
      icon: <Lightning size={64} />,
      pathEnd: '/cozinhaEnd.png',
      start: 3,

      text: 'Poste CELESC',
    },
    {
      name: 'Entradas de energia CELESC',
      icon: <Lightbulb size={64} />,
      pathEnd: '/sustentabilidadeEnd.png',
      start: 4,

      text: 'Entradas de energia CELESC',
    },
    {
      name: 'Reformas e novas instalações',
      icon: <HouseLine size={64} />,
      pathEnd: '/investirEnd.png',
      start: 5,

      text: 'Reformas e novas instalações',
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
        <title>Fótum Engenharia | Serviços Gerais</title>
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
          specialty: 'projetos e instalações elétricas.',
          text: 'Receba agora seu atendimento personalizado do nosso técnico que atende serviços elétricos todos os dias!',
        }}
      />
      <Diagram data={solarFlux} Icon />
      <WorkNumbers />
      <GeneralAdvantages />
      <div className="pt-48 pb-10">
        <About />
      </div>
      <Footer />
    </>
  );
};
export default SolarGeneration;
