import Link from "next/link";
import Image from "next/image";
import weg from "../public/weg.svg";

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
                    // centerMode
                    // centerSlidePercentage={40}
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
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
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
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
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
                    interval={2400}
                    axis="vertical"
                    showThumbs={false}
                >
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
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
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
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
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                    <div>
                        <Image
                            height={80}
                            width={288}
                            src={weg}
                            alt="Logo WEG"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
