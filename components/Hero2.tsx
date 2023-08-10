import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Hero2() {
  return (
    <div className="flex flex-col  max-w-[1400px] mx-auto  h-full px-6 w-full">
      <div className="md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 xl:gap-x-24 items-center justify-center h-full">
        <div className="hidden  justify-center items-center md:grid md:col-start-1 rounded-r-3xl relative w-full h-full">
          <Image
            className=" rounded-3xl "
            src={'/panel-on-rooftop.jpg'}
            alt={'Geração residencial'}
            layout="fill"
          />
        </div>

        <div
          className=" flex flex-col  md:gap-6 md:h-full justify-center items-center py-2 lg:py-0"
          data-aos="zoom-y-out"
        >
          <p className="px-4 text-lg md:text-base lg:text-2xl xl:text-3xl md:px-0">
            Equipe especializada e altamente capacitada, oferecemos segurança e
            garantia em todos os serviços prestados, atendendo à todas as normas
            técnicas e de segurança vigente. Os nossos valores estão pautados na
            confiança, transparência e respeito.
          </p>

          <div className=" grid-cols-1   max-w-[1400px] lg:text-2xl hidden md:grid">
            <Link href="#servicos">
              <a className="items-start py-2 px-6 bg-[white] text-[#00324b] font-bold rounded border-2 border-transparent whitespace-nowrap hidden sm:flex">
                Saiba mais →
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
