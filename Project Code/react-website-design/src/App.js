import Home from "./Pages/HomePage/HomePage";
import Login from "./Pages/LoginPage/Login";
import Profile from "./Pages/ProfilePage/Profile";
import Register from "./Pages/RegisterPage/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {user ? <Home /> : <Register />}
                </Route>
                <Route path="/login">
                    {user ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/register">
                    {user ? <Redirect to="/" /> : <Register />}
                </Route>
                <Route path="/profile/:username">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;