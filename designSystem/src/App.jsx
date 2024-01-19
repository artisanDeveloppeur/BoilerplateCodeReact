import {
  NavLink,

  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Weather } from "./Pages/Weather.jsx";
import { Scroll } from "./Pages/Scroll.jsx";

import "./../dist/styles/style.css"
import { Header } from "./Layouts/Header.jsx";
import { Footer } from "./Layouts/Footer.jsx";


import { ScrollTop } from "./Components/Navigation/ScrollTop.jsx";
import A4Animation from "./Components/Animation/A4Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,

    children: [
      {
        path: '',
        element: <div>
          <h1>Projet  </h1>
          <p>est réalisé avec avec les technologies suivantes : <strong><A4Animation /></strong></p>


          <div>
            <h2>Components</h2>
            <NavLink to="/home">Home</NavLink>

          </div>
          <div>
            <h2>API JSON</h2>
            <NavLink to="/weather">Weather</NavLink>

          </div>
        </div>
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/services/",
        children: [
          {
            path: "web-design",
          },
          {
            path: "web-dev",
            children: [
              {
                path: "frontend",
              },
              {
                path: "Backend",
                children: [
                  {
                    path: "node",
                  },
                  {
                    path: "php",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "scroll",
        element: <Scroll />
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Weather",
        element: <Weather />,
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

function Root() {


  return (
    <>
      <Header />
      <main className="container-grid">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;

}

export default App
