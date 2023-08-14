import { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/Ads/AboutEngineer';
import Advantages from '../components/Ads/SolarAdvantages';
import WorkNumbers from '../components/Ads/WorkNumbers';
import { Footer } from '../components/Footer';
import Diagram from '../components/Diagram';
import { SpecialistInformation } from '../components/SpecialistInformation';

const SolarGeneration: NextPage = () => {
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
      pathEnd: '/solarPanelEnd.png',
      start: 1,

      text: 'Os painéis geram corrente contínua.',
    },
    {
      name: 'Inversor',
      pathStart: '/gerador.png',
      pathEnd: '/geradorEnd.png',
      start: 2,
      text: 'Os inversores transformam corrente contínua em alternada.',
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

      text: 'A energia não utilizada é devolvida gerando desconto na conta.',
    },
    {
      name: 'Investir',
      pathStart: '/investir.png',
      pathEnd: '/investirEnd.png',
      start: 5,
      text: 'E é assim que você pode economizar até 95% da conta.',
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
          specialist: 'Engenheiro ',
          specialty: 'Energia Solar.',
          text: 'Receba agora um atendimento personalizado do nosso engenheiro que atende a instalações de Energia Solar todos os dias!',
        }}
      />
      <Diagram data={solarFlux} Image />
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
