import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { authDataContext } from "../context/authContext";
import { userDataContext } from "../context/UserContext";
import Loading from "../component/Loading";
import Logo from "../assets/logo.png";
import google from "../assets/google.png";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(res.data);
      getCurrentUser();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      const name = user.displayName;
      const email = user.email;

      const result = await axios.post(
        `${serverUrl}/api/auth/googlelogin`,
        { name, email },
        { withCredentials: true }
      );

      console.log(result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#0f0f0f] via-[#112226] to-[#0a1416] text-white flex flex-col items-center">
      <header
        className="w-full h-[80px] flex items-center px-8 gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="Logo" className="w-10" />
        <h1 className="text-xl font-semibold tracking-wide">unBox</h1>
      </header>

      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold">Login</h2>
        <p className="text-sm mt-1 text-gray-300">
          Welcome back — let's get you inside
        </p>
      </div>

      <div className="mt-8 w-[90%] max-w-[420px] bg-[#ffffff0f] border border-[#ffffff25] backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Google Login */}
          <div
            className="w-full h-[50px] bg-[#2c3e42] hover:bg-[#3a4f54] duration-200 rounded-lg flex items-center justify-center gap-3 cursor-pointer font-medium"
            onClick={googlelogin}
          >
            <img src={google} alt="Google" className="w-5" /> Sign in with Google
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
            <span className="flex-1 h-[1px] bg-[#ffffff25]"></span>
            <span className="text-gray-400 text-sm">OR</span>
            <span className="flex-1 h-[1px] bg-[#ffffff25]"></span>
          </div>

          {/* Inputs */}
          <input
            type="text"
            placeholder="Email"
            required
            className="w-full h-[50px] px-4 bg-transparent border border-[#ffffff35] rounded-lg text-white placeholder-gray-300 focus:border-[#6d9ee8] duration-200 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative w-full">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full h-[50px] px-4 bg-transparent border border-[#ffffff35] rounded-lg text-white placeholder-gray-300 focus:border-[#6d9ee8] duration-200 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <IoEye size={22} /> : <IoEyeOutline size={22} />}
            </div>
          </div>

          {/* Login button */}
          <button className="w-full h-[50px] mt-2 bg-[#5468ff] hover:bg-[#6a7aff] duration-200 rounded-lg text-lg font-semibold flex items-center justify-center">
            {loading ? <Loading /> : "Login"}
          </button>

          {/* Signup redirect */}
          <p className="text-sm text-gray-300 text-center mt-2">
            Don't have an account?{' '}
            <span
              className="text-[#7aa5ff] font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Create one
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;