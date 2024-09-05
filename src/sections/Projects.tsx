import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUp from "@/assets/icons/arrow-up-right.svg"
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <main className="md:py-8 lg:py-16">
        <section className="container">
          <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences"/>
           <div className="mt-10 lg:mt-24  flex flex-col gap-16 lg:gap-24 ">
            {portfolioProjects.map((project:any)=>(
             <Card className=" pt-8 px-8 lg:px-20 lg:grid grid-cols-2 pb-0" 
              key={project.results} >
              <section className="left-div lg:pb-16" >
               <div className="company-details md:text-lg inline-flex justify-center items-center gap-4 bg-gradient-to-r bg-emerald-300 to-sky-400 text-transparent bg-clip-text  uppercase">
               <span className="text-sm">{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
               </div>
               <h2 className="text-2xl md:text-3xl mt-2 md:mt-4 lg:text-4xl">{project.title}</h2>
               <hr className="border-t-white/15 mt-4"/>
               <ul className="mt-4 flex flex-col gap-4">
                {project.results.map((result:any)=>(
                 <li className="flex gap-2 text-sm md:text-base text-white/40" key={result.title}>
                  <CircleIcon className='size-5 md:size-6 lg:size-7'/>
                  <span>{result.title}</span>
                 </li>
                ))}
               </ul>
               <a href={project.link}>
                <button className="inline-flex gap-2 justify-center items-center mt-8 h-12 bg-white w-full md:w-auto px-8 text-lg rounded-xl font-semibold text-gray-950">
                  <span>Visit Live Site</span>
                  <ArrowUp className='size-4 md:size-5'/>
                </button>
               </a>
              </section>
              <div className="right-card relative">
                <Image src={project.image} alt="project-image" className="mt-8 -mb-4 md:-mb-0 lg:mt-0  lg:absolute lg:max-w-none lg:w-auto lg:h-full"/>
              </div>
             </Card>
            ))}
           </div>
        </section>
    </main>;
};
