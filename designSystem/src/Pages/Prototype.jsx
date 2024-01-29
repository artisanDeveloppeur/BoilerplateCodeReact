import {
  NavLink,
} from "react-router-dom";
import A4Animation from "../Components/Animation/A4Layout.jsx";

export function Prototype() {

  return <>
    <h1>Projet  </h1>
    <p>est réalisé avec avec les technologies suivantes : <strong><A4Animation /></strong></p>
    <ul>
      <li><a href="https://vitejs.dev/">vite</a> : le serveur de développement local</li>
      <li><a href="https://react.dev/">react</a> : la version 18</li>
      <li><a href="https://sass-guidelin.es/">sass</a> : le préprocesseur avec la syntaxe SCSS</li>
      <li><a href="https://sass-guidelin.es/#architecture">système 7-1 </a> : l'architecture pour ranger, classifier, organiser le code</li>
      <li><a href="https://getbem.com/">bem</a> : la méthodologie pour le CSS </li>
      <li><a href="#">...</a> </li>
    </ul>


    <div>
      <h2>Components</h2>
      <NavLink to="/home">Home</NavLink>

    </div>
    <div>
      <h2>API JSON</h2>
      <NavLink to="/weather">Weather</NavLink>

    </div>
  </>
}