import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {

  const handleSubmit = (event) => { 
    
    event.preventDefault() ; 
    
    console.log('event' , event.target) ;

    const { email , password } = event.target ; 

   

        signInWithEmailAndPassword(auth , email.value , password.value)
        .then(userCredential => {
          console.log( "userCredential" , userCredential)

        }).catch(err =>{
          console.log("error :" , err) ;
        })

   }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login 