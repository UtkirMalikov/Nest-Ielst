import { useEffect, useState } from "react"
import "./Navbar.scss"
import { getTopNav } from "./Data"
function Navbar() {
    const [navItems, setNavItems] = useState([])
    const [collapse, setCollapse] = useState("nav__menu")
    const [togglrIcon, setToggleIcon] = useState("toggler__icon")
    const onToggle = () => {
        collapse === 'nav__menu'
            ? setCollapse('nav__menu nav__collapse')
            : setCollapse('nav__menu')

        togglrIcon === "toggler__icon"
            ? setToggleIcon("toggler__icon toggle")
            : setToggleIcon("toggler__icon")
    }

    useEffect(() => {
        setNavItems(getTopNav())
    }, [])
    return (
        <div className="navbar">
            <div className="navbar__container container" >
                <h1 className="navbar__logo"><i className="fa-solid fa-beat" >logo</i></h1>

                <nav className="nav">
                    <ul className={collapse}>
                        {navItems.map(item => (
                            <li key={item.id} className="nav__item"><a className="nav__link" href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                    <div className={togglrIcon} onClick={onToggle}>
                        <div className="line__1"></div>
                        <div className="line__2"></div>
                        <div className="line__3"></div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar