import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" >
            <label>Email</label>
            <input className="logininput" type="text" placeholder="Enter your email..."/>
            <label>Password</label>
            <input className="logininput" type="password" placeholder="Enter your password..."/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegistorButton">Register</button>
    </div>
  )
}
