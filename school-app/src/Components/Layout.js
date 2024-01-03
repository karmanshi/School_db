import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
            <li>
                <Link className="logo"  to="/">School DB</Link>
            </li>
            <li >
                <Link to="/">Add School</Link>
            </li>
            <li >
                <Link to="/show-school">Registered Schools</Link>
            </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;