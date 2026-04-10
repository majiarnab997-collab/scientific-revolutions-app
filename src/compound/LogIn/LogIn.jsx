import { Link,useNavigate  } from 'react-router-dom'
import './Login.css'
import FackAccount from '../FackAccount/FackAccount'
import { useState } from 'react'
import  Cookies from 'js-cookie';
import {v4 as uuidv4} from 'uuid'



const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SignButtonClick=()=>{
    const account=FackAccount.find((acc)=>acc.email===email && acc.password===password);
    console.log(account)
    if(account){
      const Token = uuidv4();
      Cookies.set("loggedIn", Token, { expires: 1 });
      Cookies.set("userEmail", email, { expires: 1 });
       
      
      navigate("/",{replace:true} );
    }else{
      alert("Invalid email or password. Please try again.");
    }} 
  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          <div className="login-logo-icon">🔬</div>
          <span className="login-logo-text">Scientific Revolutions</span>
        </div>

        <span className="login-badge">Welcome back</span>
        <h2 className="login-title">Sign in to your account</h2>
        <p className="login-subtitle">Explore the discoveries that changed the world.</p>

        {/* Email */}
        <div className="login-field">
          <label>Email address</label>
          <input type="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* Password */}
        <div className="login-field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" onChange={(e)=>setPassword(e.target.value)}/>
          <div className="login-forgot">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <button className="btn-login" onClick={SignButtonClick}><Link to="/login">Sign in</Link></button>

        <div className="login-divider">
          <div className="divider-line"></div>
          <span>or</span>
          <div className="divider-line"></div>
        </div>

        <button className="btn-google">Continue with Google</button>

        <p className="login-signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </div>
    </div>
  )
}

export default LogIn