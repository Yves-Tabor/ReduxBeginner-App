import "./App.css";
import Login from "./pages/components/Login";
import Profile from "./pages/components/Profile";
import ChangeColor from "./pages/components/ChangeColor";

function App() {
    return (
        <div className="App">
            <div className="Profile">
                <Profile />
            </div>
            <div className="Login">
                <Login />
            </div>
            <div className="ChangeColor">
                <ChangeColor />
            </div>
        </div>
    );
}

export default App;