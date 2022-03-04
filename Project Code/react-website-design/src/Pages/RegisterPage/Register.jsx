import "./Register.css"

export default function Register() {
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
                        <input placeholder="Username" className="LoginInput" />
                        <input placeholder="Email" className="LoginInput" />
                        <input placeholder="Password" className="LoginInput" />
                        <input placeholder="Password Again" className="LoginInput" />
                        <button className="LoginButton">Sign Up</button>
                        <button className="LoginRegisterButton">
                            Log Into Your Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
