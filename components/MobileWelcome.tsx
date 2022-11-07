import Link from "next/link";
import Image from "next/image";

export function MobileWelcome() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto col-start-2 row-start-1 relative h-[88vh] mt-20">
            <div className="flex items-start justify-start w-full  relative h-[88vh]">
                <div className="absolute  bottom-0 w-full h-[48vh] mobile-welcome-gradient rounded-b-3xl z-10"></div>
                <div className="absolute bottom-0 bg-[#00324b]  w-full z-10 opacity-100 rounded-b-3xl"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="images/torres.jpg"
                    className=" top-0 min-w-full  w-auto  rounded-b-3xl max-h-[88vh]"
                    src="/VideoInsta1.mp4"
                ></video>
            </div>

            <a
                href="#hero"
                className="absolute flex flex-col gap-2 justify-center items-center font-bold uppercase text-center text-xl z-20 bottom-[12vh] "
            >
                <p className="text-white">Saiba mais</p>
                <div className="chevron before:bg-white after:bg-white"></div>
                <div className="chevron before:bg-white after:bg-white"></div>
                <div className="chevron before:bg-white after:bg-white"></div>
            </a>
        </div>
    );
}
