import { Alert } from "../Components/Feedback/Alert";

export function Home() {
  return <div className="grid">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div className="subtitle">Typographie custom</div>
      <h1>Title 1</h1>
      <h2>Title 2</h2>
      <h3>Title 3</h3>
      <h4>Title 4</h4>
      <h5>Title 5</h5>
      <h6>Title 6</h6>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
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