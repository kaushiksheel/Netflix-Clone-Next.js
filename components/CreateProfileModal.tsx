import React, { useContext, useState } from "react";
import Image from "next/image";
import { avatars } from "../data/avatars";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";
import { AuthContext } from "../context/AuthContext";
import { AuthContextI } from "../interfaces/ContextI";

interface PropsI {
  close: (setShowModal: boolean) => void;
}

export const CreateProfileModal = ({ close }: PropsI) => {
  const { currentUser } = useContext<AuthContextI>(AuthContext);
  const [profileName, setProfileName] = useState<string>("");
  const [selectedAvatar, setSelectedAvatar] = useState<string>("");

  const profiles = collection(db, "profiles");

  const createProfile = async () => {
    !selectedAvatar && alert("please select a avatar");
    if(!profileName) return 
    await addDoc(profiles, {
      profileName: profileName,
      avatar: selectedAvatar,
      uid: currentUser?.uid,
    }).then(()=>close(false)).catch((e)=>alert(e));
  };



  return (
    <div className="transition-all grid place-content-center w-[100vw] min-h-[100vh] bg-overlay fixed top-0 z-[93299] ">
      <div className="border-2 border-white w-[400px] md:w-[550px] h-fit bg-overlay rounded-md relative p-4">
        <h3 className="text-white text-[2rem] text-center">Select avatar</h3>
        <div className="flex items-center justify-between mt-5 py-5">
          {avatars.map((avatar) => (
            <div key={avatar.id} className="w-[5rem] h-[5rem] ">
              <Image
                onClick={() => setSelectedAvatar(avatar.url)}
                className="hover:scale-[1.2] cursor-pointer transition-all"
                src={avatar.url}
                objectFit="cover"
                alt="user avatar"
                layout="responsive"
                width={0}
                height={0}
              />
            </div>
          ))}
        </div>
        <input
          value={profileName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProfileName(e.currentTarget.value)
          }
          placeholder="profile name"
          className="w-full h-[5rem] mt-[3rem] bg-[#333333] rounded-md text-white text-[1.5rem] px-3 focus:outline-none"
        />
        <button
          onClick={createProfile}
          className="focus:outline-none w-full  mt-[3rem] text-white      bg-[red] p-5 rounded-md text-[1.5rem]"
        >
          Create
        </button>
        <button
          onClick={() => close(false)}
          className="w-full  mt-[2rem] text-white bg-overlay p-5 rounded-md text-[1.5rem] border-2 border-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};
