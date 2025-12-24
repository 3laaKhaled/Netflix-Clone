import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase/firebase'
import netflixSpinner from '../../assets/netflix_spinner.gif'
import bg from '../../assets/background_banner.jpg'
import { getAuth, setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth"


const Login = () => {

  const [ signState , setSignState ] = useState("Sign In")
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loading , setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const user_auth = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {
      const auth = getAuth()

      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      )

      if (signState === "Sign In") {
        await login(email , password)
      }else {
        await signup(name , email , password)
      }
    } catch (error) {
      console.error(error)
    }finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <img src={netflixSpinner} alt="Loading" className="w-24" />
      </div>
    )
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex justify-center items-center relative"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg})`,
      }}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-40 absolute top-6 left-10" />

      {/* Form Box */}
      <div className="w-full max-w-112.5 px-14 py-16 bg-black/75 rounded-md text-white shadow-2xl">

        <h1 className="text-[32px] font-semibold mb-7">{signState}</h1>
        
        <form onSubmit={user_auth} className="flex flex-col gap-4">
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="w-full h-12.5 bg-[#333] rounded px-5 text-sm placeholder-gray-400 outline-none focus:bg-[#444]"
              required
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full h-12.5 bg-[#333] rounded px-5 text-sm placeholder-gray-400 outline-none focus:bg-[#444]"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full h-12.5 bg-[#333] rounded px-5 text-sm placeholder-gray-400 outline-none focus:bg-[#444]"
            required
          />
          <button
            type="submit"
            className="w-full h-12.5 mt-6 bg-[#e50914] rounded font-semibold text-base cursor-pointer hover:bg-[#f6121d] transition"
          >
            {signState}
          </button>
          <div className="flex justify-between items-center text-[13px] text-gray-400 mt-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-gray-500"
              />
              Remember me
            </label>
            <p className="cursor-pointer hover:underline">Need help?</p>
          </div>
        </form>

        {/* Switch */}
        <div className="text-sm text-gray-400 mt-14">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                className="text-white ml-1 cursor-pointer hover:underline"
                onClick={() => setSignState("Sign Up")}
              >
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                className="text-white ml-1 cursor-pointer hover:underline"
                onClick={() => setSignState("Sign In")}
              >
                Sign in now
              </span>
            </p>
          )}
        </div>

      </div>


    </div>
  )
}

export default Login