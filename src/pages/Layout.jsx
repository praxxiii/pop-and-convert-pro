import { Outlet } from "react-router-dom"
import Welcome from "./Welcome"

const Layout = () => {
    return <>
        <Welcome/>
        <Outlet/>
    </>
}

export default Layout