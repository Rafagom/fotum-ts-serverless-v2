import { WhatsappLogo } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";
import { useRouter } from "next/router";

export function Widget() {
	const router = useRouter();

	return (
		<div className="fixed bottom-20 right-5 z-10 flex flex-col gap-5 justify-end items-end  ">
			{/* <a
				className="bg-[#00324b] rounded-full p-3 text-white items-center flex group w-fit  relative shake"
				href="https://wa.me/message/2KTISK2P7CG6E1"
				rel="noreferrer"
				target="_blank"
			>
				<WhatsappLogo className="w-6 h-6 lg:w-10 lg:h-10" />
				<div className="hidden show sm:flex">
					<span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
						&nbsp;Whatsapp
					</span>
				</div>
			</a> */}

			<a
				className="bg-[#ffaa00] rounded-full p-3 text-white items-center flex  relative group "
				href="https://wa.me/message/2KTISK2P7CG6E1"
				rel="noreferrer"
				target="_blank"
			>
				<div className="absolute inset-2 lg:inset-4 group-hover:inset-x-16 group-hover:inset-y-4 animate-ping  bg-[#ffaa00] lg:opacity-100 lg:group-hover:opacity-70 rounded-full -z-10"></div>
				<div className="aspect-square h-10 lg:h-14 flex items-center justify-center flex-col">
					<WhatsappLogo className="w-full h-full" />
					<p className="text-sm lg:text-base">24hrs</p>
				</div>

				<div className="hidden show sm:flex ">
					<span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700 whitespace-nowrap ">
						Contato
					</span>
				</div>
			</a>
		</div>
	);
}
