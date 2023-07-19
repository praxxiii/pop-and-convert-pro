import logo from '../assets/images/logo.png'
import Icons from './Icons'
import { Link } from 'react-router-dom'
export default function Header() {

    return <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/"><img className="navbar-brand" src={logo}></img></Link>
                <div className="navbar-nav">
                    <a className="nav-link" href="#"><Icons icon="globe" width={30} height={50} /></a>
                    <a className="nav-link" href="#"><Icons icon="youtube" width={30} height={50} /></a>
                    <a className="nav-link" href="#"><Icons icon="headphone" width={30} height={50} /></a>
                    <a className="nav-link" href="#"><Icons icon="docs" width={30} height={50} /></a>
                    <a className="nav-link" href="#"><Icons icon="announce" width={30} height={50} /></a>
                </div>
            </div>
        </nav>
    </>
}