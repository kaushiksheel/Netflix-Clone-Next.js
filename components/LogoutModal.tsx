import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { auth } from "../lib/firebase";



interface PropsI{
    close:(showLogout:boolean)=>void
  }

export const LogoutModal = ({close}:PropsI) => {
  const router=useRouter();


  const handleSignout=()=>{
    signOut(auth).then(()=>{
      localStorage.removeItem('uid');
      return router.push('/login');
    }).catch((e)=>alert(e))
  }
  return (
    <div className="fixed z-[99999] top-40 right-10 border-2 border-white p-3 bg-overlay">
      <ul>
        <li>
          <Link href='whoiswatching'><a className="text-white font-bold text-[1.8rem] cursor-pointer hover:underline" href="#!">Go to profile</a></Link>
        </li>
        <li>
          <a onClick={handleSignout} className="text-white font-bold text-[1.8rem] cursor-pointer hover:underline" href="#!">Signout</a>
        </li>
        <li onClick={close as undefined|any}>
          <a  className="text-white font-bold text-[1.8rem] cursor-pointer hover:underline" href="#!">Close</a>
        </li>
      </ul>
    </div>
  );
};
