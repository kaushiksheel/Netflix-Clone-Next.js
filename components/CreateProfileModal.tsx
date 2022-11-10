import React, { useContext, useState } from "react";
import Image from "next/image";
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
    if (!profileName) return;
    await addDoc(profiles, {
      profileName: profileName,
      avatar: selectedAvatar,
      uid: currentUser?.uid,
    })
      .then(() => close(false))
      .catch((e) => alert(e));
  };

  const images = [
    "https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRaGfMeG37Ayx3OwvsEqeTlSVvQWzVOiEfYQ8GRHx3zhx81IZy88ZnGN-cU7XLgoc-fIvFfp1ue_Pl-Vqw2cL7KiX5BRdj7z1g.png?r=59d",
    "https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdxbwI5TRu89nI_cd6jTv-IflvV5Zk6Cs4_ZbL9TqcYqro8KZ6RonjEQZn0ZSkwYJ50xjR6_nbqnnvwVYYCaTagdYdV3aQrkqA.png?r=ae9",
    "https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABafGsF7RLiQlTUx1eVpITxBZ5Me8s0M3fvgIbDNpwk1-2dnsNGRdzVOyajfwonpnfF3MKRdPt2l5GejDXr3cbGE8fVV1YWdHhw.png?r=ce4",
    "https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSQGQWkzf71tVsbzO1dU6kvtezyXhoWTkUzebNS_MSeRVGdckDNMVs1q7DIks1J_qGDNfrVjr2OEZvTPsNq9zBLKCbgRvCj-RA.png?r=d47",
    "https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYSw2XUJOe-RXGqlMhzAK2kb3m8jiiuICaICOYRemQXvfBcEmoaG0XMebWDsKrQ4fhsAYwzopxK6Cm5l5w2F9iMzCVqZuapW7A.png?r=201",
  ];

  return (
    <div className="transition-all grid place-content-center w-[100vw] min-h-[100vh] bg-overlay fixed top-0 z-[93299] ">
      <div className="border-2 border-white w-[400px] md:w-[550px] h-fit bg-overlay rounded-md relative p-4">
        <h3 className="text-white text-[2rem] text-center">Select avatar</h3>
        <div className="flex items-center justify-between mt-5 py-5">
          {images.map((image,index) => (
            <div key={index} className="w-[5rem] h-[5rem] ">
              <Image
                onClick={() => setSelectedAvatar(image)}
                className="hover:scale-[1.2] cursor-pointer transition-all"
                src={image}
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
