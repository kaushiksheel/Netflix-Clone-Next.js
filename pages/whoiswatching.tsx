import { collection, onSnapshot, query, where } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "../components/Container";
import { CreateProfileModal } from "../components/CreateProfileModal";
import { AuthContext } from "../context/AuthContext";
import { UserProfileI } from "../interfaces/UserI";
import { db } from "../lib/firebase";

const WhoIsWatching = () => {
  const router = useRouter();
  const {  setUserAvatar } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState<UserProfileI[]>([]);

  const profiles = collection(db, "profiles");


  useEffect(() => {
    const q = query(profiles, where("uid", "==", localStorage.getItem('uid')));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProfile(
        snapshot.docs.map((doc: any) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, [profiles]);

  return (
    <>
      <div className="w-[100vw] min-h-[100vh] ">
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
          <div className=" m-auto block w-fit h-fit mt-[2rem]">
            <h3 className="text-white text-center  text-[3.4rem]">
              Who is watching?
            </h3>
            <div className="flex my-[2rem] gap-10 flex-wrap justify-center">
              {profile?.map((item) => (
                <div
                  onClick={() => {
                    setUserAvatar(item.data.avatar)
                    localStorage.setItem('avatar',item.data.avatar)
                    router.push("/home");
                  }}
                  key={item.id}
                  className="grid place-items-center"
                >
                  <div className="w-[10rem] h-[10rem] rounded-lg">
                    <Image
                      className="hover:scale-[1.2] cursor-pointer transition-all"
                      src={item.data.avatar}
                      objectFit="cover"
                      alt="user avatar"
                      layout="responsive"
                      width={0}
                      height={0}
                    />
                  </div>
                  <p className="text-white text-[1.5rem]">
                    {item.data.profileName}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="border-2 border-white m-auto block mt-[3rem] text-white bg-overlay text-[2rem] cursor-pointer p-3 px-5"
              onClick={() => setShowModal(true)}
            >
              create profile
            </button>
          </div>
        </Container>
      </div>
      {showModal && <CreateProfileModal close={setShowModal} />}
    </>
  );
};

export default WhoIsWatching;
