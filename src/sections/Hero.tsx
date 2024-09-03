import Image from "next/image";
// import throne from "../assets/images/throne.png";
import throne from "../assets/images/memoji-computer.png";
import Arrowdown from "../assets/icons/arrow-down.svg"
import grainImage from "../assets/images/grain.jpg"
import StarIcon from "../assets/icons/star.svg"
import SparkleIcon from "../assets/icons/sparkle.svg"
import HeroOrbit from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:py-80 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"> 
      <div className="absolute inset-0  -z-30 opacity-5" style={{backgroundImage:`url(${grainImage.src})`}}> </div>
      <div className="rings size-[620px]"></div>
      <div className="rings size-[820px]  shadow-emerald-300/5"></div>
      <div className="rings size-[1020px]  shadow-emerald-300/5"></div>
      <div className="rings size-[1220px]  shadow-emerald-300/5"></div>
       <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
       </HeroOrbit>
       <HeroOrbit size={557} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
       </HeroOrbit>
       <HeroOrbit size={589} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
       </HeroOrbit>
       <HeroOrbit size={706} rotation={-216}>
        <SparkleIcon className="size-12 text-emerald-300/5" />
       </HeroOrbit>
       <HeroOrbit size={531} rotation={-182}>
        <SparkleIcon className="size-10 text-emerald-300/5" />
       </HeroOrbit>
       <HeroOrbit size={421} rotation={11}>
        <SparkleIcon className="size-10 text-emerald-300/15" />
       </HeroOrbit>
       <HeroOrbit size={447} rotation={-15}>
        <SparkleIcon className="size-10 text-emerald-300/5 pl-3" />
       </HeroOrbit>
       <HeroOrbit size={593} rotation={98}>
        <SparkleIcon className="size-10 text-emerald-300/5 pl-3" />
       </HeroOrbit>
       <HeroOrbit size={445} rotation={80}>
        <SparkleIcon className="size-5 text-emerald-300/5" />
       </HeroOrbit>
       <HeroOrbit size={730} rotation={89}>
        <div className="circle  text-emerald-300/5 rounded-full size-2"></div>
       </HeroOrbit>
       <HeroOrbit size={530} rotation={-40}>
        <div className="circle  text-emerald-300/5 rounded-full size-2"></div>
       </HeroOrbit>
       <HeroOrbit size={670} rotation={-4}>
        <div className="circle  text-emerald-300/5 rounded-full size-2"></div>
       </HeroOrbit>
       </div>
     <div className="container ">
       <div className="flex flex-col justify-center items-center">
        <Image src={throne} className="size-[100px] rounded-xl" alt="logo"/>
        <div className="flex justify-center items-center gap-4 bg-gray-950 px-4 py-1.5 rounded-xl border border-white/15">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <p className="text-sm font-medium">Available for new projects</p>
        </div>
       </div>
       <div className="mx-auto max-w-lg">
        <h1 className="text-3xl md:text-5xl mt-8 text-center font-serif tracking-wide">Building Exceptional User Experiences</h1>
        <p className="text-center text-white/50  mt-4 font-medium md:text-lg tracking-normal">I specialize in transforming designs into functional, high-performing web applications.Let&apos;s discuss your next project</p>
       </div>
       <div className="buttons flex flex-col justify-center items-center  md:flex-row gap-4  mt-8">
        <button className="inline-flex items-center px-6 gap-3 rounded-xl border-white/15 border h-12 ">
          <span className="font-semibold">Explore My Work</span>
          <Arrowdown className='size-4'/>
        </button>
        <button className="inline-flex items-center px-5 gap-1 rounded-xl border-white/15 border h-12 bg-white">
          <span className="text-xl">👋</span>
          <span className=" text-gray-950 font-bold tracking-wide">Let&apos;s Connect</span>
        </button>
       </div>
     </div>
    </section>
  );
};
