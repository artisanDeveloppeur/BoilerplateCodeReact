import { Carousel } from "../Components/ContentDisplay/Carousel";
import { Alert } from "../Components/Feedback/Alert";

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

export function Home() {
  return <div className="grid">
    <div className="gcol-xxl-12 gcol-xl-12 gcol-lg-12 gcol-md-12 gcol-sm-12 gcol-xs-12">
      <div className="subtitle">Carousel with indicators</div>
      <Carousel data={slidesCarousel} />
    </div>
    <div className="gcol-xxl-6 gcol-xl-6 gcol-lg-6 gcol-md-8 gcol-sm-12 gcol-xs-12">
      <div className="subtitle">Typographie custom</div>
      <h1>Title heading 1</h1>
      <h2>Subtitle heading 2</h2>
      <h3>Title level  3</h3>
      <h4>Title level 4</h4>
      <h5>Title level 5</h5>
      <h6>Title last 6</h6>
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

  </div>
}