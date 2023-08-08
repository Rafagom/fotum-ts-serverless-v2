import Link from "next/link";
import Image from "next/image";

export function Hero() {
	return (
		<div className="flex flex-col mx-auto h-full items-center justify-center px-6 max-w-[1400px]">
			<div className="items-center justify-center h-full  md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 xl:gap-x-24 w-full ">
				<div className="hidden justify-center items-center rounded-3xl mb-5 sm:flex md:hidden ">
					<video
						id="videoref"
						autoPlay
						loop
						muted
						playsInline
						poster="/logo.png"
						className="rounded-3xl   overflow-hidden "
						src="/fotum2.mp4"
					></video>
				</div>

				<div className="hidden md:flex">
					<video
						autoPlay
						loop
						muted
						playsInline
						poster="/logo.png"
						className=" col-start-2 rounded-3xl h-full  w-[45vw]"
						src="/fotum2.mp4"
					></video>
				</div>

				<div
					className=" flex flex-col max-w-[700px] place-self-end md:gap-8 lg:gap-10 md:h-full  justify-center items-center md:row-start-1"
					data-aos="zoom-y-out"
				>
					<p className="px-4 text-lg md:text-base lg:text-2xl xl:text-3xl md:px-0">
						Com mais de 10 anos de experiência em serviços elétricos
						de excelência, oferecendo as melhores soluções em
						projetos, instalações e energia solar fotovoltaica.
					</p>

					<div className="hidden  items-center justify-center  gap-3 max-w-[1400px] md:grid md:grid-cols-2 lg:text-2xl lg:px-0 lg:gap-6 z-30">
						<Link href="# " className=" ">
							<a
								href="https://wa.me/message/2KTISK2P7CG6E1"
								target="_blank"
								rel="noreferrer"
								className="flex text-center items-center justify-center py-2  bg-[#00324b] text-[#ffaa00] font-bold rounded border-2 border-[#00324b] lg:px-6"
							>
								Contato
							</a>
						</Link>

						<Link href="#servicos" className="">
							<a className=" items-start py-2 px-6 bg-[white] text-[#00324b] font-bold rounded border-2 border-transparent whitespace-nowrap hidden sm:flex">
								Saiba mais →
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
