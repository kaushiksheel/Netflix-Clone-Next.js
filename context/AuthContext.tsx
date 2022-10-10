import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthContextI } from "../interfaces/ContextI";
import { UserI } from "../interfaces/UserI";
import { auth } from "../lib/firebase";

export const AuthContext = createContext({} as AuthContextI);

interface ContextPropsI {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: ContextPropsI) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<UserI>();
  const [userAvatar, setUserAvatar] = useState<string>("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user as UserI);
        router.push("/home");
      } else{
        router.push("/");
      }
    });

    return () => {
      unsub();
    };
  }, []);


  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, userAvatar, setUserAvatar }}
    >
      {children}
    </AuthContext.Provider>
  );
};