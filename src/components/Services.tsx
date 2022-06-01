import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolarPanel } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export function Services() {
  return (
    <div className="flex flex-col gap-6 px-4 mt-4">
      <h2 className="text-[#ffaa00] font-medium">NOSSOS SERVIÇOS</h2>
      <h1 className="font-bold text-lg text-[#00324b]">
        bla bla bla bla bla bla
      </h1>
      <p>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum
      </p>
      <ul className="flex flex-col gap-2">
        <li className="flex justify-center items-center rounded py-4 border-2 gap-2">
          <Image
            src={"/solar-panel-solid.svg"}
            alt={"solar panel logo"}
            width={24}
            height={24}
          />
          Geração Solar Fotovoltaica
        </li>
        <li className="flex justify-center items-center rounded py-4 border-2">
          Instalações Elétricas
        </li>
        <li className="flex justify-center items-center rounded py-4 border-2">
          Eficiência energética
        </li>
      </ul>
    </div>
  );
}
