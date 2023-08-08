import { Head } from 'next/document';
import { WhatsappLogo } from 'phosphor-react';
import { Header } from './Header';
import Image from 'next/image';

export function SpecialistInformation(props: any) {
  return (
    <>
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
                Engenheiro especialista em <br />
                <span className="text-[#ffaa00]">Energia Solar.</span>
              </h2>
              <p className="text-xl md:text-2xl max-w-[40ch]">
                Receba agora um atendimento personalizado do nosso engenheiro
                que atende a instalações de Energia Solar todos os dias!
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
            href="#como-funciona"
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
    </>
  );
}
