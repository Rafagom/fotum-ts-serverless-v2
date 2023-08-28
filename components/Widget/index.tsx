import { Phone, WhatsappLogo } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
	return (
		<Popover className="fixed bottom-20 right-5 z-20 flex flex-col gap-5 justify-end items-end ">
			{({ open }) => (
				<>
					<a
						className={`bg-[#00324b] rounded-full p-3 text-white items-center flex group w-fit  relative shadow-md ${
							open ? "opacity-0" : "shake opacity-100"
						}`}
						href="https://wa.me/message/2KTISK2P7CG6E1"
						rel="noreferrer"
						target="_blank"
					>
						<WhatsappLogo className="w-6 h-6 lg:w-8 lg:h-8" />
						<div className="hidden show sm:flex">
							<span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
								&nbsp;Whatsapp
							</span>
						</div>
					</a>

					<Popover.Button
						className={`bg-[#ffaa00] rounded-full py-3 px-5 text-white items-center flex  relative  ${
							open ? "" : "shadow-md"
						}`}
					>
						<div
							className={`absolute top-1/5 left-1/5 w-3/4 h-3/4  bg-[#ffaa00] lg:opacity-100  rounded-full -z-10 ${
								open ? "animate-none" : "animate-ping"
							}`}
						></div>
						<div className="h-6 flex items-center justify-center flex-col">
							<div className="flex h-full w-fit">
								<WhatsappLogo className="w-full h-full" />
								<Phone className="w-full h-full" />
							</div>

							<p className="text-[0.6rem] lg:text-xs ">
								Plantão 24hrs
							</p>
						</div>
					</Popover.Button>
					<Popover.Panel className="absolute z-40 -top-24 lg:-top-24 right-0 ">
						<div className=" grid grid-rows-2 gapy-4 h-36 px-4 lg:px-8 max-w-sm bg-[#ffaa00] rounded-2xl relative shadow-md">
							<a
								href="https://wa.me/message/2KTISK2P7CG6E1"
								rel="noreferrer"
								target="_blank"
								className="flex items-center justify-center gap-2 py-4 px-2 text-white "
							>
								<WhatsappLogo className="h-full w-fit" />
								<p>WhatsApp</p>
							</a>

							<div className="h-[1px] w-full absolute bg-white top-1/2"></div>
							<a
								href="tel:48984110903"
								className="flex items-center justify-center gap-2 py-4 px-2 text-white"
							>
								<Phone className="h-full w-fit" />
								<p className="whitespace-nowrap">
									(48) 98411-0903
								</p>
							</a>
						</div>
					</Popover.Panel>
				</>
			)}
		</Popover>
	);
}
