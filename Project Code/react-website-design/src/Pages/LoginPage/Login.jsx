import "./Login.css"
import React, { useContext, useRef } from "react"
import { LoginCall } from "../../ApiCalls"
import { AuthContext } from "../../Context/AuthContext"
import { CircularProgress } from "@material-ui/core"

export default function Login() {
    const email = useRef();
    const password = useRef();

    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        LoginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }

    console.log(user);

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
                    <form className="LoginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="LoginInput" ref={email} />
                        <input placeholder="Password" type="password" required minLength="6" className="LoginInput" ref={password} />
                        <button className="LoginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px" /> : "Log In"}</button>
                        <span className="LoginForgot">Forgot Password?</span>
                        <button className="LoginRegisterButton">
                        {isFetching ? <CircularProgress color="white" size="20px" /> : "Create a New Account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
