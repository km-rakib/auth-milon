import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ( {children} ) => {


  const {user, loading} = useContext(AuthContext)

  if(loading){
    return <div className='my-10 text-center'><span className="loading loading-dots loading-lg"></span></div>
  }

  if(user){
    return children
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;