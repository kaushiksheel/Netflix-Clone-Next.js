import { createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "../components/Container";
import { auth } from "../lib/firebase";

const Signup = () => {
  const router = useRouter();
  const[loading,setLoading]=useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user){
          localStorage.setItem('uid',user.uid as string);
          setLoading(false)
          return router.push('/whoiswatching')
        }
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="w-[100vw] min-h-[100vh] md:bg-loginBg md:bg-cover md:bg-center  realtive md:before:absolute md:before:w-full md:before:h-full md:before:bg-overlay">
      <Container>
        <div className="py-3">
          <Image
            objectFit="contain"
            src="/logo.svg"
            alt="netflix logo"
            width={150}
            height={50}
            className="text-[red]"
          />
        </div>
        <div className="card my-[18px] md:w-[40.5rem] md:h-fit md:grid md:m-auto md:bg-overlay  md:p-[2rem] md:mt-[3rem]">
          <h3 className="text-white font-bold text-[2.8rem]">Sign Up</h3>
          {error && (
            <div className="bg-[#E87C03] font-bold p-2 px-[2rem] rounded-md mt-[3rem]">
              <p className="text-white font text-[1.7rem]">{error}</p>
            </div>
          )}
          <form className="mt-[2rem]" onSubmit={handleSignup}>
            <input
              className="w-full h-[5rem] mb-[2rem] rounded-md p-3 text-[1.5rem] focus:outline-none bg-[#333333] text-white"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
            <input
              className="w-full h-[5rem]  rounded-md p-3 text-[1.5rem] focus:outline-none bg-[#333333] text-white"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
            />
            <button className="bg-[#E50914] text-white w-full mt-[2rem] rounded-md p-4 text-[2rem]  font-bold">
            {loading?<ClipLoader
              color="white"
              size={22}
              />:"Sign Up"}
            </button>
          </form>
          <p className="text-[#737373] mt-4 text-[1.7rem]">
            Have an account?
            <Link href={"/login"}>
              <span className="ml-2  text-white cursor-pointer">Login</span>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
