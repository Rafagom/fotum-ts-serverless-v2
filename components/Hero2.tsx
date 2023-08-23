import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function Hero2() {
	return (
		<div className="flex flex-col  max-w-[1400px] mx-auto  h-full px-6 w-full">
			<div className="md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 xl:gap-x-24 items-center justify-center h-full">
				<div className="hidden  justify-center items-center md:grid md:col-start-1 rounded-3xl relative w-full h-full overflow-hidden">
					<Carousel
						infiniteLoop
						autoPlay
						showArrows={false}
						showStatus={false}
						showIndicators={false}
						interval={2000}
						showThumbs={false}
						dynamicHeight={true}
					>
						<Image
							src={"/cr1.jpeg"}
							alt=""
							width={1000}
							height={600}
							className=""
						/>
						<Image
							src={"/cr2.jpeg"}
							alt=""
							width={1000}
							height={600}
						/>
						<Image
							src={"/cr3.jpeg"}
							alt=""
							width={1000}
							height={600}
						/>
						<Image
							src={"/cr4.jpeg"}
							alt=""
							width={1000}
							height={600}
						/>
						<Image
							src={"/cr5.jpeg"}
							alt=""
							width={1000}
							height={600}
						/>
						<Image
							src={"/cr6.jpeg"}
							alt=""
							width={1000}
							height={600}
						/>
						<Image
							src={"/cr7.jpeg"}
							alt=""
							width={1000}
							height={600}
						/>
					</Carousel>
				</div>

				<div
					className=" flex flex-col  md:gap-6 md:h-full justify-center items-center py-2 lg:py-0"
					data-aos="zoom-y-out"
				>
					<p className="px-4 text-lg md:text-base lg:text-xl xl:text-2xl font-medium  md:px-0">
						Equipe especializada e altamente capacitada, oferecemos
						segurança e garantia em todos os serviços prestados,
						atendendo à todas as normas técnicas e de segurança
						vigente. Os nossos valores estão pautados na confiança,
						transparência e respeito.
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
