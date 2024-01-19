import { useRef } from "react";

import { FaNetworkWired, FaLaptopCode, FaImage } from "react-icons/fa6";

export function ScrollSpy() {
  const networking = useRef(null);
  const developpement = useRef(null);
  const design = useRef(null);

  const scrollToSection = (elementRef) => {

    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="scrollspy__navigation">
        <ul>
          <li className="link">
            <a href="#networking" title="Networking" onClick={() => scrollToSection(networking)}  ><FaNetworkWired /></a>
          </li>
          <li className="link">
            <a href="#developpement" title="Développement" onClick={() => scrollToSection(developpement)}><FaLaptopCode /></a>
          </li>
          <li className="link">
            <a href="#design" title="Design" onClick={() => scrollToSection(design)}><FaImage /></a>
          </li>
        </ul>
      </nav>
      <div>
        <section ref={networking} className="scrollspy " id="networking">
          <h3>Réseau</h3>
          <hr className="separator-start separator-start__cloud" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida elit sit amet ante bibendum luctus. Phasellus pellentesque eros vitae ipsum interdum gravida.</p>
          <div className="nav-pills-div nav-pills-div__cloud grid">
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-server fa circle-no"></i>
              <h4>Networking</h4>
              <p>Fusce imperdiet, nisi id faucibus varius, ligula arcu bibendum.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-calendar-alt fa circle-no"></i>
              <h4>Serveur et réseau</h4>
              <p>Aenean iaculis urna libero, ut viverra metus sollicitudin ut.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-truck-loading fa circle-no"></i>
              <h4>Dépannage</h4>
              <p>Aenean egestas eget sem ut cursus. Integer non convallis dolor.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-file-word fa circle-no"></i>
              <h4>Office 365</h4>
              <p> Pellentesque viverra est erat, nec sagittis erat porta at. </p>
            </div>
          </div>
        </section>
        <section ref={developpement} className="scrollspy " id="developpement">
          <h3>Dévelopement web</h3>
          <hr className="separator-start separator-start__cloud" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida elit sit amet ante bibendum luctus. Phasellus pellentesque eros vitae ipsum interdum gravida.</p>
          <div className="nav-pills-div nav-pills-div__cloud grid">
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-shopping-cart fa circle-no"></i>
              <h4>E-commerce</h4>
              <p>Fusce imperdiet, nisi id faucibus varius, ligula arcu bibendum.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-laptop fa circle-no"></i>
              <h4>Site vitrine</h4>
              <p>Aenean iaculis urna libero, ut viverra metus sollicitudin ut.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-tablet-alt fa circle-no"></i>
              <h4>Application</h4>
              <p>Aenean egestas eget sem ut cursus. Integer non convallis dolor.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-bullhorn fa circle-no"></i>
              <h4>Référencement naturel</h4>
              <p> Pellentesque viverra est erat, nec sagittis erat porta at. </p>
            </div>
          </div>
        </section>
        <section ref={design} className="scrollspy " id="design">
          <h3>Design</h3>
          <hr className="separator-start separator-start__cloud" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida elit sit amet ante bibendum luctus. Phasellus pellentesque eros vitae ipsum interdum gravida.</p>
          <div className="nav-pills-div nav-pills-div__cloud grid">
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-paint-brush fa circle-no"></i>
              <h4>Graphisme / Logo</h4>
              <p>Fusce imperdiet, nisi id faucibus varius, ligula arcu bibendum.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-camera fa circle-no"></i>
              <h4>Photos</h4>
              <p>Aenean iaculis urna libero, ut viverra metus sollicitudin ut.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-video fa circle-no"></i>
              <h4>Vidéos</h4>
              <p>Aenean egestas eget sem ut cursus. Integer non convallis dolor.</p>
            </div>
            <div className="gcol-xl-6 gcol-lg-6 gcol-md-6 gcol-sm-12">
              <i className="fa-map fa circle-no"></i>
              <h4>Print</h4>
              <p> Pellentesque viverra est erat, nec sagittis erat porta at. </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};








