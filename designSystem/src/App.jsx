import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";


import "./../dist/styles/style.css"
import { Header } from "./Layouts/Header.jsx";
import { Footer } from "./Layouts/Footer.jsx";
import { Weather } from "./Pages/Weather.jsx";
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
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;

}

export default App
