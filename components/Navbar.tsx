import Image from "next/image";
import React, {  useContext } from "react";
import { Container } from "./Container";
import { BellIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../context/AuthContext";
import { AuthContextI } from "../interfaces/ContextI";



interface PropsI{
  open:(showLogout:boolean)=>void
}

export const Navbar = ({open}:PropsI) => {

const {userAvatar}=useContext<AuthContextI>(AuthContext);




  return (
    <nav className="bg-black py-[2rem] fixed w-full top-0 h-fit z-[999999]">
      <Container>
        <div className="flex items-center text-[white] gap-[1.8rem] justify-between">
          <div className="flex items-center">
            <Image
              objectFit="contain"
              src="/logo.svg"
              alt="netflix logo"
              width={100}
              height={30}
              className="text-[red]"
            />

            <div className="flex items-center gap-[1.4rem] ml-[1.8rem]">
              <a href="#!" className="text-[1.5rem] hidden md:block">
                Home
              </a>
              <a href="#!" className="text-[1.5rem] hidden md:block">
                Series
              </a>
              <a href="#!" className="text-[1.5rem] hidden md:block">
                Films
              </a>
              <a href="#!" className="text-[1.5rem] hidden md:block">
                New & Popular
              </a>
              <a href="#!" className="text-[1.5rem] hidden md:block">
                Audio & Subtitles
              </a>
              <a href="#!" className="text-[1.5rem]">
                My List
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[2rem]">
            <MagnifyingGlassIcon className="w-[2.4rem] h-[2.4rem] cursor-pointer" />
            <BellIcon className="w-[2.4rem] h-[2.4rem] cursor-pointer" />
            <Image
            onClick={open as undefined|any}
              className="cursor-pointer"
              src={userAvatar?userAvatar:"https://avatars.dicebear.com/api/adventurer/your-custfffom-seed.svg"}
              alt="user avatar"
              width={28}
              height={28}
              objectFit="contain"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};
