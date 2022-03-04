import "./Login.css"

export default function Login() {
    return (
        <div className="Login">
            <div className="LoginWrapper">
                <div className="LoginLeft">
                    <h3 className="LoginLogo">GameHub</h3>
                    <span className="LoginDescription">
                        Connect with friends and like-minded gamers from all around the world on GameHub!
                    </span>
                </div>
                <div className="LoginRight">
                    <div className="LoginBox">
                        <input placeholder="Email" className="LoginInput" />
                        <input placeholder="Password" className="LoginInput" />
                        <button className="LoginButton">Log In</button>
                        <span className="LoginForgot">Forgot Password?</span>
                        <button className="LoginRegisterButton">
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
