import { Alert } from "../Components/Feedback/Alert";

export function Home() {
  return <div className="grid">
    <div className="DGcol-xxl-6 DGcol-xl-6 DGcol-lg-6 DGcol-md-8 DGcol-sm-12 DGcol-xs-12">
      <div className="subtitle">Typographie custom</div>
      <h1>Title heading 1</h1>
      <h2>Subtitle heading 2</h2>
      <h3>Title level  3</h3>
      <h4>Title level 4</h4>
      <h5>Title level 5</h5>
      <h6>Title last 6</h6>
    </div>
    <div className="DGcol-xxl-6 DGcol-xl-6 DGcol-lg-6 DGcol-md-4 DGcol-sm-12 DGcol-xs-12">
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