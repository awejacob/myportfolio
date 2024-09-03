import StarIcon from "@/assets/icons/star.svg"

const words = [
"Innovative",
"Secure",
"Intelligent",
"Scalable",
"Reliable",
"Automated",
"Efficient",
"Cutting-edge",
"Optimized",
"Robust",
"Adaptive",
"Advanced",
]

export const TapeSection = () => {
  return <div className="py-[9.1rem] md:py-[12.484rem] lg:py-24  overflow-x-clip">
    <div className="flex items-center gap-4 relative -mx-1 bg-gradient-to-tr bg-emerald-400 to-sky-400 -rotate-3">
      <div className="flex gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
     {words.map((word)=>(
      <div className="flex-none" key={word}>
      <div className=" py-3 inline-flex items-center gap-5 text-gray-950 font-extrabold text-lg" key={word}>
       <span>{word}</span>
       <StarIcon className='size-6 -rotate-12'/>
       </div>
       </div>
     ))}
    </div>
    </div>
  </div>;
};
