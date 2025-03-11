import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const name = "Alu Mia";
  const age = 60;

  const [user, setUser] = useState(null);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth)
  }


  // onAuthStateChanged(auth, currentUser => {
  //   if(currentUser){
  //     console.log("currently logged in ", currentUser);
  //     setUser(currentUser);
  //   }else{
  //     console.log("no user logged in");
  //     setUser(null);
  //   }
  // })

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log("current user",currentUser);
      setUser(currentUser);

    })
    return () => {
      unSubscribe()
    }
  },[])


  const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// import React, { createContext } from 'react';
// const AuthContext = createContext(null);
// const AuthProvider = ({children}) => {
//   authInfo = {
//     name: "Komol"
//   }
//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
