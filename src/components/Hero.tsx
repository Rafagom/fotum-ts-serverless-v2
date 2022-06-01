import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col gap-6 px-4 mt-4">
      <h1 className="font-bold text-xl text-[#00324b] ">
        REDUZA EM ATÉ 95% SUA FATURA DE ENERGIA
      </h1>
      <p className="">
        Com a <span className="text-[#ffaa00] font-bold">Fótum</span> isso é
        possível! <br /> Peça já seu orçamento sem compromisso e comece a gerar
        a sua própria energia limpa e rentável!
      </p>
      <div className="flex gap-6">
        <Link href="#">
          <a className="flex w-32 text-center items-center justify-center py-2 px-3 bg-[#00324b] text-[#ffaa00] font-bold rounded border-2 border-[#00324b]">
            Orçamento
          </a>
        </Link>
        <Link href="#">
          <a className="flex w-32 items-start py-2 px-3 bg-[white] text-[#00324b] font-bold rounded border-2 border-transparent">
            Saiba mais →
          </a>
        </Link>
      </div>
      <Image
        src={"/img2.png"}
        width={400}
        height={350}
        alt={"Geração residencial"}
      ></Image>
    </div>
  );
}
