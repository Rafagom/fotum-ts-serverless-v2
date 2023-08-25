import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import List from "../public/list.svg";
import XIcon from "../public/x.svg";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Header() {
	const [top, setTop] = useState(true);

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	const navigation = [
		{ name: "Início", href: "/", as: "/" },
		{
			name: "Energia Solar",
			href: "/solarGeneration",
			as: "/energia-solar",
		},
		{
			name: "Ar Condicionado",
			href: "/ar-condicionado",
			as: "/ar-condicionado",
		},
		{ name: "Serviços", href: "generalServices", as: "/servicos-gerais" },
		{ name: "Contato", href: "/contact", as: "/contato" },
	];

	return (
		<header
			className={`fixed top-0 w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white ${
				!top && "bg-white backdrop-blur-sm shadow-lg"
			}`}
		>
			<div className="max-w-[1400px] mx-auto">
				<Popover>
					<div className="relative pt-6 pb-2 sm:pt-0 mx-auto px-5 sm:px-6 z-50 ">
						<nav className="relative flex items-center justify-between sm:h-14 lg:justify-start">
							<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
								<div className="flex items-center justify-between w-full md:w-auto">
									<Link href="/">
										<a className="flex items-center justify-center gap-3">
											<Image
												width={100}
												height={40}
												src={Logo}
												alt="Logo Fotum Engenharia"
											/>
										</a>
									</Link>
									<div className="-mr-2 flex items-center md:hidden">
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100  ">
											<Image
												height={32}
												width={32}
												src={List}
												alt="Menu"
											/>
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className="hidden md:flex md:ml-10 md:pr-0 md:space-x-8 md:items-center md:justify-end md:w-full">
								{navigation.map((item) => (
									<Link
										key={item.name}
										className="border-b border-transparent hover:border-black"
										href={item.href}
										as={item.as}
									>
										<a>{item.name}</a>
									</Link>
								))}
								<div className="flex items-center gap-6">
									<a
										href="https://wa.me/message/2KTISK2P7CG6E1"
										target="_blank"
										rel="noreferrer"
									>
										<WhatsappLogo size={32} />
									</a>
									<a
										href="https://www.instagram.com/fotumengenharia/"
										target="_blank"
										rel="noreferrer"
									>
										<InstagramLogo size={32} />
									</a>
								</div>
							</div>
						</nav>
					</div>

					<Transition
						as={Fragment}
						enter="duration-300 ease-out"
						enterFrom="opacity-100 -translate-y-full"
						enterTo="opacity-100 translate-y-0"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 -translate-y-full"
					>
						<Popover.Panel
							focus
							className="absolute z-50 top-0 w-screen h-screen md:hidden"
						>
							<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden h-full">
								<div className="px-5 pt-4 flex items-center justify-between">
									<Link
										href="/"
										className="flex items-center justify-center gap-3"
									>
										<Image
											width={100}
											height={40}
											src={Logo}
											alt="Logo Fotum Engenharia"
										/>
									</Link>
									<div className="-mr-2">
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100">
											<Image
												height={32}
												width={32}
												src={XIcon}
												alt="Fechar"
											/>
										</Popover.Button>
									</div>
								</div>

								<div className="flex flex-col px-8  items-center justify-center  my-auto pt-20 divide-y">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											as={item.as}
										>
											<Popover.Button className=" text-center py-4 rounded-md text-base font-bold  hover:text-gray-900 hover:bg-gray-200 w-full">
												{item.name}
											</Popover.Button>
										</Link>
									))}
									<a
										href="https://www.instagram.com/fotumengenharia/"
										target="_blank"
										rel="noreferrer"
										className=" px-24 py-4 rounded-md text-base font-bold  hover:text-gray-900 hover:bg-gray-200"
									>
										Intagram
									</a>
									<a
										href="https://wa.me/message/2KTISK2P7CG6E1"
										target="_blank"
										rel="noreferrer"
										className=" px-24 py-4 rounded-md text-base font-bold  hover:text-gray-900 hover:bg-gray-200"
									>
										Whatsapp
									</a>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>
			</div>
		</header>
	);
}
