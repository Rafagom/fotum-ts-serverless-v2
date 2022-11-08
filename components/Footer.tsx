import { Envelope, InstagramLogo, Phone, WhatsappLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer className="flex flex-col w-full items-center gap-2  bg-[#f2f2f2] pt-1 pb-1">
            <div className="flex w-full items-center justify-center gap-6  bg-[#f2f2f2] pt-1 pb-1">
                <a
                    className="flex items-center gap-2 font-medium"
                    href="mailto:contato@fotumengenharia.com.br"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Envelope size={28} />
                    <p className="hidden lg:flex">
                        contato@fotumengenharia.com.br
                    </p>
                </a>
                <a
                    href="https://wa.me/message/2KTISK2P7CG6E1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-medium"
                >
                    <WhatsappLogo size={28} />
                    <p className="hidden lg:flex">(48) 98411-0903</p>
                </a>

                <a
                    className="flex items-center gap-2 font-medium"
                    href="tel:48984110903"
                >
                    <Phone size={28} />
                    <p className="hidden lg:flex">(48) 98411-0903</p>
                </a>

                <a
                    href="https://www.instagram.com/fotumengenharia/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-medium"
                >
                    <InstagramLogo size={28} />
                    <p className="hidden lg:flex">/fotumengenharia</p>
                </a>
            </div>

            <p className="text-xs">
                ©2022 por Fótum Engenharia - Santa Catarina, Brasil
            </p>
        </footer>
    );
}
