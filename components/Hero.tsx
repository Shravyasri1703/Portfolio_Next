import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { Button } from './ui/MovingBorders'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-40 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full  h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                Dynamic Web Magic With Next.JS
              </h2>
              <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless User Experiences' />
              <p className='text-center md:tracking-wider mb-10 text-sm md:text-lg lg:text-2xl mt-2'>Hi, I&apos;m Shravyasri, a <span className='text-purple font-bold'>Full Stack Developer</span> based in <span className='text-orange-400 font-bold'>IN</span><span className='font-bold'>D</span><span className='text-green-500 font-bold'>IA</span></p>
              <a href='/about'>
              <Button
            
             borderRadius='1.75rem'
             className='flex-1 text-white border-neutral-200 dark:border-slate-800 '
            >
                <div className='flex lg:flex-row flex-col p-3 py-6 md:p-5 lg:p-10 gap-2'>
                  
                   <div className='lg:ms-5'>
                    <h1 className='text-start text-xl md:text-2xl font-bold'>
                      Scroll down to explore my background.
                    </h1>
                   
                   </div>
                </div>
            </Button>
              </a>
            </div>

        </div>

    </div>
  )
}

export default Hero