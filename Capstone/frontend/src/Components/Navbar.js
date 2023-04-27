import { Link } from "react-router-dom";
import { useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    const getProfilePicture = window.localStorage.getItem("profilePicture");
    const userID = window.localStorage.getItem("userID");
    const username = window.localStorage.getItem("username");

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    }
    return ( 
        <div className="navbar">
            <div className="nav-head">
                <img src="./images/logo.jpg" id="logo" alt="logo" />
                <h2>Hungry Panda</h2>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                {!cookies.access_token ? (
                    <Link to="/auth"> Login/ Register </Link>
                    ) : (
                        <>                    
                            <Link to="/create"> New Review </Link>
                            <Link to="/saved"> Saved Reviews </Link>
                            <button className="logout-btn" onClick={logout}>Logout</button>
                            <Link to ={`/users/${userID}`}>
                                <div className="profile-group">
                                    <img  src={getProfilePicture} alt="pp" className="profile-logo"/>  
                                    <span className="profile-tooltip">{username}</span>
                                </div>
                            </Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}