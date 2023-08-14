import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { CaretUp } from 'phosphor-react';
import Link from 'next/link';

export function Services() {
  return (
    <div
      id="servicos"
      className="flex flex-col gap-6 px-4  mb-16 max-w-[1400px] md:mx-auto md:px-0 pt-10 md:pt-0"
    >
      <h2 className="text-[#ffaa00] font-medium text-3xl text-center">
        NOSSOS SERVIÇOS
      </h2>
      <p className="text-center">
        Impulsionamos a transição para sistemas de energia mais sustentáveis,
        confiáveis ​​e acessíveis. Com nossas tecnologias inovadoras,
        energizamos a sociedade!
      </p>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] ">
              <Image
                src={'/solar-panel-solid.svg'}
                alt={'solar panel logo'}
                width={24}
                height={24}
              />
              <p className="text-left">Energia Solar Fotovoltaica</p>
              <CaretUp
                size={20}
                className={open ? 'rotate-180 transform' : ''}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col text-center gap-y-4">
              Invista em energia solar e economize dinheiro gerando sua própria
              energia elétrica.
              <Link
                href="/solarGeneration"
                as="energia-solar"
                className="text-center font-semibold"
              >
                Saiba mais...
              </Link>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] ">
              <Image
                className="text-yellow-500"
                src={'/screwdriver-wrench-solid.svg'}
                alt={'solar panel logo'}
                width={24}
                height={24}
              />
              <p className="text-left">Instalações elétricas</p>
              <CaretUp
                size={20}
                className={open ? 'rotate-180 transform' : ''}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col text-center gap-y-4">
              Projetamos e executamos instalações elétricas, incluindo
              infraestrutura, entradas de energia, luminotécnica, lustres,
              quadros, SPDA (para-raios), motores e bombeiros.
              <Link
                href="generalServices"
                as="servicos-gerais"
                className="text-center font-semibold tex"
              >
                Saiba mais...
              </Link>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] ">
              <Image
                src={'/snowflake-solid.svg'}
                alt={'snowflake icon'}
                width={24}
                height={24}
              />
              <p className="text-left">Ar-condicionado</p>
              <CaretUp
                size={20}
                className={open ? 'rotate-180 transform' : ''}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col text-center gap-y-4">
              Eleve seu conforto com nossas instalações de Ar Condicionado e
              garanta ambientes agradáveis em todas as estações.
              <Link
                href="generalServices"
                as="ar-condicionado"
                className="text-center font-semibold tex"
              >
                Saiba mais...
              </Link>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
