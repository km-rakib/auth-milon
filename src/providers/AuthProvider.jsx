// import React, {createContext} from 'react';
// const AuthContext = createContext(null);
// const AuthProvider = ({children}) => {

//   const authInfo = {
//     name: "Nodi"
//   }
//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext } from 'react';
const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  authInfo = {
    name: "Komol"
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;