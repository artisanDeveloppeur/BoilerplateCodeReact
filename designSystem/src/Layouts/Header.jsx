import {
  useNavigation,
  NavLink,
} from "react-router-dom";
import { useToggle } from "../hooks/useToggle.js"
import { activeClassIf } from "../utils/classnames.js"

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
              <li className="nav-item">

                <NavLink className={activeClassIf(page === 'contact', 'nav-link')} to="/contact">Contact</NavLink>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
}