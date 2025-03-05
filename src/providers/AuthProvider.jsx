import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {createContext} from 'react';
import { auth } from '../firebase.init';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const name = "Alu Mia"
  const age = 60

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    name,age,
    createUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
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