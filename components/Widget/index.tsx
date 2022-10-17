import { WhatsappLogo } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
    return (
        <div className="fixed bottom-20 right-5 z-10">
            <Popover>
                <Popover.Panel>
                    <WidgetForm />
                </Popover.Panel>

                <a
                    className="bg-[#00324b] rounded-full p-3 text-white items-center flex group absolute bottom-0 right-0"
                    href="https://wa.me/message/2KTISK2P7CG6E1"
                    rel="noreferrer"
                    target="_blank"
                >
                    <WhatsappLogo className="w-6 h-6 lg:w-10 lg:h-10" />
                    <div className="hidden show sm:flex">
                        <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
                            &nbsp;Contato
                        </span>
                    </div>
                </a>

                {/* UPCOMING */}
                {/* <Popover.Button className="bg-[#00324b] rounded-full p-3 text-white items-center flex group absolute bottom-0 right-0">
                    <WhatsappLogo className="w-6 h-6 lg:w-10 lg:h-10" />
                    <div className="hidden show sm:flex">
                        <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
                            &nbsp;Feedback
                        </span>
                    </div>
                </Popover.Button> */}
            </Popover>
        </div>
    );
}
