import { Accordion } from "../Components/ContentDisplay/Accordion";
import { Card } from "../Components/ContentDisplay/Card";
import { Carousel } from "../Components/ContentDisplay/Carousel";
import { Faq } from "../Components/ContentDisplay/Faq";
import { Alert } from "../Components/Feedback/Alert";
import { ProgressBar } from "../Components/Feedback/ProgressBar";
import { Tab } from "../Components/Navigation/Tabs/Tab";

const slidesCarousel = [
  {
    "src": "https://picsum.photos/seed/img1/1000/400",
    "alt": "Image 1 for carousel"
  },
  {
    "src": "https://picsum.photos/seed/img2/1000/400",
    "alt": "Image 2 for carousel"
  },
  {
    "src": "https://picsum.photos/seed/img3/1000/400",
    "alt": "Image 3 for carousel"
  },
  {
    "src": "https://picsum.photos/seed/img4/1000/400",
    "alt": "Image 4 for carousel"
  },
  {
    "src": "https://picsum.photos/seed/img5/1000/400",
    "alt": "Image 5 for carousel"
  },
  {
    "src": "https://picsum.photos/seed/img6/1000/400",
    "alt": "Image 6 for carousel"
  }
]

const cardsData = [
  {
    "id": 1,
    "image": "https://picsum.photos/seed/img1/300/200",
    "title": "Titre article 1 ",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "id": 2,
    "image": "https://picsum.photos/seed/img2/300/200",
    "title": "Titre article 2",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "id": 3,
    "image": "https://picsum.photos/seed/img3/300/200",
    "title": "Titre article 3 ",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  /*
  {
    "id": 4,
    "image": "https://picsum.photos/seed/img4/300/200",
    "title": "Titre article 4",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "id": 5,
    "image": "https://picsum.photos/seed/img5/300/200",
    "title": "Titre article 5 ",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "id": 6,
    "image": "https://picsum.photos/seed/img6/300/200",
    "title": "Titre article 6",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  */

]
export function Home() {
  return <div className="grid">
    <div className="gcol-xxl-12 gcol-xl-12 gcol-lg-12 gcol-md-12 gcol-sm-12 gcol-xs-12">
      <div className="subtitle">Carousel with indicators</div>
      <Carousel data={slidesCarousel} />
    </div>
    <div>
      <div className="subtitle">Blog with modal</div>
      <div className="wrapper__cards">
        {cardsData.map((c) => (
          <Card key={c.id}
            image={c.image}
            title={c.title}
            description={c.description}
            href={`#post:${c.id}`}
            buttonLabel="+ Continuer à lire"
          />

        ))}
      </div>
    </div>
    <div className="gcol-xxl-12 gcol-xl-12 gcol-lg-12 gcol-md-12 gcol-sm-12 gcol-xs-12">
      <div className="subtitle">Tabs</div>
      <Tab />
    </div>
    <div className="gcol-xxl-6 gcol-xl-6 gcol-lg-6 gcol-md-8 gcol-sm-12 gcol-xs-12">
      <div className="subtitle">FAQ (all selected and visible) + details and summary tag </div>
      <Faq />
    </div>
    <div className="gcol-xxl-6 gcol-xl-6 gcol-lg-6 gcol-md-8 gcol-sm-12 gcol-xs-12">
      <div className="subtitle">Accordion (once selected and visible) + css todo</div>
      <Accordion />
    </div>
    <div className="gcol-xxl-6 gcol-xl-6 gcol-lg-6 gcol-md-4 gcol-sm-12 gcol-xs-12">
      <div className="subtitle">Alert Boostrap</div>
      <Alert>
        A simple primary alert—check it out!
      </Alert>
      <Alert type="danger">
        A simple danger alert—check it out!
      </Alert>
      <Alert type="success">
        A simple success alert—check it out!
      </Alert>
      <Alert type="warning">
        A simple warning alert—check it out!
      </Alert>
    </div>
    <div className="gcol-xxl-6 gcol-xl-6 gcol-lg-6 gcol-md-4 gcol-sm-12 gcol-xs-12">
      <div className="subtitle">Toast</div>
      <ProgressBar />

    </div>

  </div>
}