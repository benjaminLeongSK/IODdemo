import { Link } from 'react-router-dom'

const Nav = () => {
    return ( 
        <nav className="navbar">
            <h1>Dwitter</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/posts">New Post</Link>
            </div>
        </nav>
     );
}
 
export default Nav;