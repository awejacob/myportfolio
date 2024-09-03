import React from 'react'

function SectionHeader({eyebrow, title, description,}:{title:string, eyebrow:string,description:string}) {
  return (
    <div>
        <div className="semi-heading-text flex justify-center text-center">
            <p className="font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">{eyebrow}</p>
            </div>
           <h2 className="text-center font-serif text-3xl md:text-5xl mt-6">{title}</h2>
           <p className="text-center text-white/50 mt-4 md:max-w-md mx-auto lg:text-xl">{description}</p>
    </div>
  )
}

export default SectionHeader
