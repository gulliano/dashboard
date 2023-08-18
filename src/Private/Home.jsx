import React from 'react'
import { signOut  } from 'firebase/auth';
import { auth } from '../firebase';

const Home = () => {

  const logout = () => { 

    signOut(auth) ;
    
    console.log('Logout') ;

   }

  return (
    <div>Home

      <button onClick={logout} > Logout </button>

    </div>
  )
}

export default Home