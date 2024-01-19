import { Typewriter } from '../Components/Animation/Typewriter.jsx'
import { ScrollSpy } from '../Components/Navigation/ScrollSpy.jsx'
export function Scroll() {

  return <div>
    <h1>Nos <Typewriter text="services" delay={500} infinite /></h1>
    <p>Voici l’intégralité de nos services par départements afin de satisfaire au mieux vos besoins.</p>
    <ScrollSpy />

  </div>
}

//https://blog.logrocket.com/using-react-intersection-observer-create-dynamic-header/