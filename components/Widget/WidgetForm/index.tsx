import { useState } from "react";
import { FormStart } from "./Steps/FormStart";
import { FormEnd } from "./Steps/FormEnd";
import { Form } from "./Steps/Form";
import PowerCalculatorModal from "../../PowerCalculator/PowerCalculatorModal";

export type onProblemChangedType = boolean;
export type onIdeaChangedType = boolean;
export type onThoughtChangedType = boolean;
export type onFormEndRequestedType = boolean;
export type onScreenshotTookType = string;
export type screenshotType = string | null;
export type optionType = {
    name: string;
    imgSrc: string;
    imgAlt: string;
    action: () => void;
};

export function WidgetForm() {
    const [isFormEnd, setIsFormEnd] = useState(false);
    const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [option, setOption] = useState<{
        name: string;
        imgSrc: string;
        imgAlt: string;
        action: (option: optionType) => void;
    } | null>(null);

    const formOptions = [
        {
            name: "Dimensionar",
            imgSrc: "/calculator-solid.svg",
            imgAlt: "Calculadora",
            action: (choosenOption: optionType) => {
                // e.preventDefault;
                setupVerifyHandler();
            },
        },

        // {
        //     name: "Instagram",
        //     imgSrc: "/instagram.svg",
        //     imgAlt: "Instagram logo",
        // },
        {
            name: "Fale Conosco",
            imgSrc: "/whatsapp.svg",
            imgAlt: "WhatsApp logo",
            action: (choosenOption: optionType) => {
                window.open(
                    "https://wa.me/message/2KTISK2P7CG6E1",
                    "_blank",
                    "noreferrer"
                );
            },
        },
    ];

    function handleRestartForm() {
        setIsFormEnd(false);
        setOption(null);
    }

    function setupVerifyHandler() {
        setIsVerifyModalOpen(!isVerifyModalOpen);
    }

    return (
        <>
            <div className="bg-gray-200 p-4 rounded-2xl mb-20 flex flex-col items-center gap-y-1 relative max-w-[320px]">
                {isFormEnd ? (
                    <FormEnd onFormRestartRequested={handleRestartForm} />
                ) : !option ? (
                    <FormStart
                        formOptions={formOptions}
                        choosenOption={setOption}
                    />
                ) : (
                    <Form
                        onFormRestartRequested={handleRestartForm}
                        onFormEndRequested={setIsFormEnd}
                        onScreenshotTook={setScreenshot}
                        screenshot={screenshot}
                        formOption={option}
                    />
                )}

                {/* <footer className="text-xs">Made by @engineergomes </footer> */}
            </div>
            <PowerCalculatorModal
                isOpen={isVerifyModalOpen}
                onClose={setupVerifyHandler}
            />
        </>
    );
}
