import {
  useNavigation,
  NavLink,
} from "react-router-dom";
import { useToggle } from "../hooks/useToggle.js"
import { activeClassIf } from "../utils/classnames.js"
import Navbar from "../Components/Navigation/Navbar.jsx";
import MobileNav from "../Components/Navigation/MobileNav.jsx";

import "../../dist/styles/menu.css"

export function Header({ page }) {
  //const { state } = useNavigation();
  const [expanded, toggleExpanded] = useToggle(false)
  return <>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand txt-uppercase" to="/home">Design system</NavLink>
          <button
            onClick={toggleExpanded}
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={activeClassIf(page === 'home', 'nav-link')} aria-current="page" to="/home">Home</NavLink>
              </li>
              {/* for large screens */}
              <Navbar />

              {/* for small screens */}
              <MobileNav />
              <li className="nav-item">
                <NavLink className={activeClassIf(page === 'weather', 'nav-link')} to="/weather">Weather</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={activeClassIf(page === 'scroll', 'nav-link')} to="/scroll">Scroll</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={activeClassIf(page === 'contact', 'nav-link')} to="/contact">Contact</NavLink>
              </li>

            </ul>
            {/*
            <div className="nav-area">

            react-multilevel-dropdown-menu

            https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/

            </div>
            */}
          </div>

        </div>
      </nav>

    </header>
  </>
}