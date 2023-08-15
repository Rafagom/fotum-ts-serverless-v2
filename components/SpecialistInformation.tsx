import { WhatsappLogo } from 'phosphor-react';
import { Header } from './Header';
import Image from 'next/image';

export function SpecialistInformation(props: any) {
  const imageSetter = () => {
    if (props.data.image === 'services') {
      return 'sm:bg-[url(/img4.jpg)] bg-no-repeat bg-cover bg-center  relative';
    }
    // if (props.data.image === 'air conditioner') {
    //   return 'sm:bg-[url(/ar0.jpeg)] bg-no-repeat bg-cover bg-center  relative';
    // }
    return 'sm:bg-[url(/CME5.png)] bg-no-repeat bg-cover bg-center  relative';
  };

  return (
    <>
      {props.data.image !== 'air conditioner' ? (
        <>
          <Header />
          <div className={imageSetter()}>
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
                    {props.data.specialist} especialista em
                    <br />
                    <span className="text-[#ffaa00]">
                      {props.data.specialty}
                    </span>
                  </h2>
                  <p className="text-xl md:text-2xl max-w-[40ch]">
                    {props.data.text}
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
                      <p>Falar com o {props.data.specialist.toLowerCase()}</p>
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
                <p className="whitespace-nowrap ">Ver mais</p>
                <div className="flex absolute bottom-24 items-center justify-center">
                  <div className="chevron "></div>
                  <div className="chevron "></div>
                  <div className="chevron "></div>
                </div>
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header />
          <div
            className="bg-[length:320px] relative"
            // data-aos="fade-left"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
          >
            <div className="absolute inset-0 grid grid-cols-4 gap-x-16">
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="hidden absolute opacity-20 bg-[#6b92a7] h-full w-full z-10 rounded-none lg:rounded-l-3xl top-0 lg:block"></div>
                <Image
                  src={'/ar1.jpeg'}
                  layout="fill"
                  objectFit="cover"
                  alt="Ar condicionado"
                />
              </div>
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="hidden absolute opacity-20 bg-[#6b92a7] h-full w-full z-10 rounded-none lg:rounded-l-3xl top-0 lg:block"></div>
                <Image
                  src={'/ar2.jpeg'}
                  layout="fill"
                  objectFit="cover"
                  alt="Ar condicionado"
                />
              </div>
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="hidden absolute opacity-20 bg-[#6b92a7] h-full w-full z-10 rounded-none lg:rounded-l-3xl top-0 lg:block"></div>
                <Image
                  src={'/ar0.jpeg'}
                  layout="fill"
                  objectFit="cover"
                  alt="Ar condicionado"
                />
              </div>
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                <div className="hidden absolute opacity-20 bg-[#6b92a7] h-full w-full z-10 rounded-none lg:rounded-l-3xl top-0 lg:block"></div>
                <Image
                  src={'/ar3.jpeg'}
                  layout="fill"
                  objectFit="cover"
                  alt="Ar condicionado"
                />
              </div>
            </div>

            <div
              className="hidden lg:flex absolute right-0 bottom-0  z-10 xl:right-[calc(100vw/12)]"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="1200"
            >
              <Image
                src={'/engLucasNoBg.svg'}
                width={420}
                height={680}
                alt={'Geração residencial'}
              />
            </div>
            <div
              className="flex flex-col p-4 mb-6 lg:max-w-[1600px] lg:mx-auto lg:px-24 mt-24 justify-center h-full"
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-duration="500"
            >
              <div className="flex flex-col gap-8 sm:bg-white max-w-[600px] px-8 py-5 rounded-3xl opacity-95 z-20 sm:py-10">
                <div className="flex flex-col gap-4 max-w-3xl opacity-100">
                  <p className="text-xl lg:text-2xl">Fale com nosso</p>
                  <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">
                    {props.data.specialist} especialista em
                    <br />
                    <span className="text-[#ffaa00]">
                      {props.data.specialty}
                    </span>
                  </h2>
                  <p className="text-xl md:text-2xl max-w-[40ch]">
                    {props.data.text}
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
                      <p>Falar com o {props.data.specialist.toLowerCase()}</p>
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
      )}
    </>
  );
}
