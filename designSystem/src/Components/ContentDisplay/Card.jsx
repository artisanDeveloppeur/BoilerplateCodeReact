import { DialogModal } from "../Feedback/DialogModal.jsx";
import { ButtonComponent } from "../UI/ButtonComponent";
import { useToggle } from "../../hooks/useToggle.js";

/**
 * @param {string} image
 * @param {string} title
 * @param {string} description
 * @param {string} href
 * @param {string} buttonLabel
 * @returns {JSX.Element}
 */
export function Card({ image, title, description, href, buttonLabel }) {
  const showButton = !!(href && buttonLabel)
  const [isEditing, toggleEditing] = useToggle(false)
  return (
    <section className="section__card">
      <picture>
        {image && <img src={image} alt="" />}
      </picture>
      {title && <h2 className="section__card__title">{title}</h2>}
      {description && <p className="section__card__description js-read-more is-expanded">{description}</p>}
      {isEditing && <DialogModal
        onClose={toggleEditing}
      >

        <picture>
          {image && <img src={image} alt="" />}
        </picture>
        {title && <h2 className="section__card__title">{title}</h2>}
        {description && <p className="section__card__description js-read-more is-expanded">{description}</p>}
      </DialogModal>}

      <span className="read-more__link-wrap">
        <a id="read-more_0" className="read-more__link rounded" >
          <span className="dashicons ">+ </span>
          Continuer à lire
        </a>
        {showButton && <ButtonComponent variant="primary" onClick={toggleEditing}>{buttonLabel}</ButtonComponent>}

      </span>
    </section >

  );
}

{/*

    <div className="card">
      {image && <img src={image} className="card-img-top" alt="" />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text">{description}</p>}
        {showButton && <Button variant="primary" href={href}>{buttonLabel}</Button>}
      </div>
    </div>
*/}