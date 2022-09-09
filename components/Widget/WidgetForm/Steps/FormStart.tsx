import { CloseButton } from "../Buttons/CloseButton";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";
import Image from "next/image";
import { optionType } from "../";
// import PowerCalculatorModal from "../../../PowerCalculator/PowerCalculatorModal";
// import { useState } from "react";

interface FormStartProps {
    formOptions: Array<{
        name: string;
        imgSrc: string;
        imgAlt: string;
        action: (option: any) => void;
    }>;
    choosenOption: (type: {
        name: string;
        imgSrc: string;
        imgAlt: string;
        action: (option: optionType) => void;
    }) => void;
}

export function FormStart({ formOptions, choosenOption }: FormStartProps) {
    return (
        <>
            <header className="flex text-xl leading-6 items-center text-[#00324b]">
                <p>Como podemos ajudar?</p>
                <CloseButton />
            </header>

            <main className="grid grid-cols-2 gap-x-4 items-center mt-6 mb-6 ">
                {formOptions.map((option) => (
                    <button
                        key={option.name}
                        className="flex flex-col items-center justify-center bg-gray-200 px-4 py-3 rounded-2xl gap-3 border-2 border-[#00324b] text-[#00324b] min-h-[140px] hover:border-[#ffaa00] focus:outline-[#ffaa00]"
                        onClick={(e) => {
                            e.preventDefault();
                            option.action(option);
                        }}
                    >
                        <Image
                            src={option.imgSrc}
                            alt={option.imgAlt}
                            width={50}
                            height={50}
                        />
                        {option.name}
                    </button>
                ))}
            </main>
        </>
    );
}
