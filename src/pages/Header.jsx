import logo from '../assets/images/logo.png'
import Icons from '../components/Icons'

export default function Header({changeScreen}) {

    const handleScreenChange = (screen) => () => {
        changeScreen(screen)
    }

    return <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <img className="navbar-brand" src={logo}></img>
                <div className="navbar-nav">
                    <a href="#" className="nav-link" onClick={handleScreenChange('home')} aria-current="home" >Home</a>
                    <a href="#" className="nav-link" onClick={handleScreenChange('list')} aria-current="list" >List</a>
                    {/* <a className="nav-link" href="#"><Icons icon="globe" width={30} height={50} /></a>
                    <a className="nav-link" href="#"><Icons icon="youtube" width={30} height={50} /></a>
                    <a className="nav-link" href="#"><Icons icon="headphone" width={30} height={50} /></a>
                    <a className="nav-link" href="#"><Icons icon="docs" width={30} height={50} /></a>
                    <a className="nav-link" href="#"><Icons icon="announce" width={30} height={50} /></a> */}
                </div>
            </div>
        </nav>
    </>
}