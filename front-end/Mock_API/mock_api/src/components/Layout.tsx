import { NavLink, Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <nav>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/About'>Sobre</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default Layout;