import { GlobeAltIcon } from "@heroicons/react/24/solid";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container } from "../components/Container";
import { Faq } from "../components/Faq";
import { SearchBox } from "../components/SearchBox";
import { faq } from "../data/faq";

export interface faqI{
  id:number;
  title:string;
  overview:string;
  active:boolean;
}

const Home: NextPage = () => {
  const router=useRouter();
  const [faqD,setFaqD]=useState<faqI[]>(faq);

const handleFaq=(id:number)=>{
const selectedFaq=faqD.map(item=>item.id===id?{...item,active:!item.active}:item)

setFaqD(selectedFaq)
}


  return (
    <>
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

    <section>
        <div
          className="flex flex-col md:flex md:flex-row 
          p-5 pb-15 md:justify-between md:items-center md:p-6 md:pl-60 md:pr-60 md:pb-12 pt-14"
        >
          <div className="textContainer">
            <p className="text-white font-bold text-4xl text-center md:text-5xl">
              Enjoy on your TV.
            </p>
            <p
              className="m-auto   text-white text-3xl  max-w-2xl
          text-center mt-5 md:text-3xl md:mt-7 "
        style={{lineHeight:1.8}}
            >
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="imageContainer">
            <Image src="/home-tv.jpg" width={530} height={392} alt='desktop thumbnail'/>
          </div>
        </div>
      </section>
      <hr className="w-full h-3 bg-hr border-none" />
      <section>
        <div className="flex-col md:flex md:flex-row items-center justify-between pt-10 pb-12  ">
          <div className="ml-24">
            <Image
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              width={530}
              height={392}
              alt='desktop thumbnail'
            />
          </div>
      
          <div className=" mt-12 md:mr-[12rem]">
            <p className="text-white font-bold text-4xl md:odd:max-w-xsm leading-xl md:text-5xl text-center  md:text-left  ">
              Download your shows to watch offline.
            </p>
            <p
              className="m-auto text-white  text-3xl  max-w-2xl
          text-center mt-5 md:text-3xl md:mt-3 md:text-left md:m-0 "
          style={{lineHeight:1.8}}
            >
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
      <hr className="w-full h-3 bg-hr border-none" />
      <section>
        <div
          className="flex flex-col md:flex md:flex-row 
      p-5 pb-15 md:justify-between md:items-center md:p-6 md:pl-60 md:pr-60 md:pb-12 pt-14"
        >
          <div className="textContainer">
            <p className="text-white font-bold text-4xl text-center md:text-5xl">
              Watch everywhere.
            </p>
            <p
              className="m-auto text-white  text-3xl  max-w-2xl
          text-center mt-5 md:text-3xl md:mt-3"
          style={{lineHeight:1.8}}
          m-auto>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="imageContainer">
            <Image src="/home-imac.jpg" width={530} height={392} alt='desktop thumbnail'/>
          </div>
        </div>
      </section>
      <hr className="w-full h-3 bg-hr border-none" />
      <section>
        <div className="flex-col md:flex md:flex-row items-center justify-between pt-10 pb-12 pl-5 pr-5 ">
          <div className="ml-12">
            <Image src="/image.png" width={530} height={392} alt='desktop thumbnail'/>
          </div>
          <div className="textContainer mr-[5rem] md:mr-[12rem]  w-full md:w-fit">
            <p className="text-white font-bold text-4xl md:odd:max-w-xsm leading-xl md:text-5xl text-center  md:text-left ">
              Create profiles for children.
            </p>
            <p
              className="m-auto text-white  text-3xl  max-w-2xl
          text-center mt-5 md:text-3xl md:mt-3 md:text-left md:m-0 "
          style={{lineHeight:1.6}}
            >
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-5 mb-11">
        <h3 className="text-white text-center text-[2.5rem]   font-bold">Frequently Asked Questions</h3>
        <div className="pb-5 px-4 md:w-[800px] m-auto block mt-11">
          {faqD.map(item=>
<Faq key={item.id} item={item}
handleFaq={handleFaq}
/>
            )}


        </div>
        </div>
        <Container>
<div className="mt-[4rem] md:grid md:place-items-center md:w-[70rem] md:m-auto py-5">
<p className="text-white text-center text-[1.4rem] md:text-[1.8rem] font-bold mb-5">Ready to watch? Enter your email to create or restart your membership.</p>
        <SearchBox/>
</div>
        </Container>
      </section>
    </>
  )
};

export default Home;
