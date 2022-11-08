import Link from "next/link";
import Image from "next/image";
import logo0 from "../public/logo0.svg";
import logo1 from "../public/logo1.svg";
import logo2 from "../public/logo2.svg";
import logo3 from "../public/logo3.svg";
import logo4 from "../public/logo4.svg";
import logo5 from "../public/logo5.svg";
import logo6 from "../public/logo6.svg";
import logo7 from "../public/logo7.svg";
import logo8 from "../public/logo8.svg";
import logo9 from "../public/logo9.svg";
import logo10 from "../public/logo10.svg";
import logo11 from "../public/logo11.svg";
import logo12 from "../public/logo12.svg";
import logo13 from "../public/logo13.svg";
import logo14 from "../public/logo14.svg";
import logo15 from "../public/logo15.svg";
import logo16 from "../public/logo16.svg";
import logo17 from "../public/logo17.svg";
import logo18 from "../public/logo18.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function KnownBrands() {
    return (
        <div className="w-full bg-[#00324B] flex flex-col gap-10 py-6">
            <h1 className="text-white text-center text-3xl font-bold">
                Trabalhamos com as melhores marcas
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-5 ">
                <Carousel
                    infiniteLoop
                    autoPlay
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    interval={1700}
                    axis="vertical"
                    showThumbs={false}
                >
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo0}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo1}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo2}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo3}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo18}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo17}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo16}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo15}
                            alt="Logo Parceiro"
                        />
                    </div>
                </Carousel>
                <Carousel
                    infiniteLoop
                    autoPlay
                    centerMode
                    centerSlidePercentage={100}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    interval={4300}
                    axis="vertical"
                    showThumbs={false}
                >
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo5}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo6}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo7}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo8}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo9}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo14}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo13}
                            alt="Logo Parceiro"
                        />
                    </div>
                </Carousel>
                <Carousel
                    infiniteLoop
                    autoPlay
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    interval={2400}
                    axis="vertical"
                    showThumbs={false}
                >
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo9}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo8}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo7}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo6}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo5}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo12}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo11}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo16}
                            alt="Logo Parceiro"
                        />
                    </div>
                </Carousel>
                <Carousel
                    infiniteLoop
                    autoPlay
                    // centerMode
                    // centerSlidePercentage={30}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    interval={1590}
                    axis="vertical"
                    showThumbs={false}
                    className="hidden sm:block"
                >
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo4}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo3}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo2}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo1}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo0}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo10}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo7}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo18}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo12}
                            alt="Logo Parceiro"
                        />
                    </div>
                </Carousel>
                <Carousel
                    infiniteLoop
                    autoPlay
                    // centerMode
                    // centerSlidePercentage={30}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    interval={3500}
                    axis="vertical"
                    showThumbs={false}
                    className="hidden sm:block"
                >
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo1}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo3}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo5}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo7}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo2}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo14}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo15}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo16}
                            alt="Logo Parceiro"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={logo1}
                            alt="Logo Parceiro"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
