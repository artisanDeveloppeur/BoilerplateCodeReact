import {
  createBrowserRouter,
  defer,
  NavLink,
  Outlet,
  RouterProvider,
  useNavigation,
  useRouteError,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { useToggle } from "./hooks/useToggle.js"
import { activeClassIf } from "./utils/classnames.js"

import "./../dist/styles/style.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,

    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

    ],
  },
]);

function PageError() {
  const error = useRouteError();
  return (
    <>
      <h1>Une erreur est survervenue</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}

function Root({ page }) {
  const { state } = useNavigation();
  const [expanded, toggleExpanded] = useToggle(false)

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/home">Design system</NavLink>
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
      <div className="container my-4">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;

}

export default App
