import { GlobeAltIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Container } from './Container'
import { SearchBox } from './SearchBox'

export const IntroHeader = () => {
    const router=useRouter()
  return (
    <header className="w-[100vw] min-h-[100vh] bg-introBg bg-cover bg-center
    realtive before:absolute before:w-full before:h-full before:bg-overlay
    
    ">
      <Container>
        <div className="flex justify-between items-center py-6">
        <div className="">
          <Image
            objectFit="contain"
            src="/logo.svg"
            alt="netflix logo"
            width={110}
            height={40}
            className="text-[red]"
          />
        </div>
        <div className="flex gap-4">
          <button className="bg-overlay  text-white text-[1.7rem] p-3 px-5 flex items-center gap-3"><GlobeAltIcon
          className="w-[19px] h-[19px] "
          /> English</button>
          <button onClick={()=>router.push('/login')} className="bg-[#E50914]  text-white text-[1.7rem] p-3 px-5 rounded-md">Sign In</button>
        </div>
        </div>
        <div className="m-auto block w-fit mt-[4rem]">
          <h3 className="text-white font-bold md:text-[3.4rem] 
          text-[2.4rem]
          text-center">Unlimited movies, TV <br />
              shows and more.</h3>
              <p className="text-white text-center mt-[1rem] text-[1.8rem] md:text-[2.2rem]">Watch anywhere. Cancel anytime.</p>
              <p className="text-white text-center mt-[1rem] text-[1.8rem] md:text-[2.2rem]">Ready to watch? Enter your email to create or restart your membership.</p>
              <div className="mt-11">
              <SearchBox/>
              </div>
        </div>
      </Container>
    </header>
  )
}
