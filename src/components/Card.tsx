import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

function Card({className,children}:PropsWithChildren<{className:string}>) {
  return (
    <article className={twMerge("wrapper bg-slate-800 overflow-hidden rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:z-10 after:outline after:outline-2 after:-outline-offset-2 after:rounded-xl after:outline-white/15 p-6",className)}>
      {children}
    </article>
  )
}

export default Card
