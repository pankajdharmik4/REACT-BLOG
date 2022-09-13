import "./login.css"
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" >
            <label>Email</label>
            <input className="logininput" type="text" placeholder="Enter your email..."/>
            <label>Password</label>
            <input className="logininput" type="password" placeholder="Enter your password..."/>
            <button className="loginButton"></button>
        </form>
        <button className="loginRegistorButton">
          <Link className="link" to="/register">
            REGISTER
          </Link>
        </button>
    </div>
  )
}
