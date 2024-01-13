import { DialogModal } from "../Feedback/DialogModal.jsx";
import { ButtonComponent } from "../UI/ButtonComponent";
import { useToggle } from "../../hooks/useToggle.js";
import { formatDate, truncateTxt } from "../../utils/classnames.js";
import React, { useState, useEffect } from 'react';

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

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /*
    const useTruncate = (input) => {
      console.log(input.length)
      return input?.length > 120 ? `${input.substring(0, 50)}...` : input;
    }
  */


  return (
    <section className="section__card">
      <picture>
        {image && <img src={image} alt="" />}
      </picture>
      {title && <h2 className="section__card__title">{title}</h2>}
      {description && <p className="section__card__description js-read-more is-expanded">{truncateTxt(description, 120, 100, ' [...]')}</p>}
      {isEditing && <DialogModal
        onClose={toggleEditing}
      >
        <ButtonComponent type="button" aria-label="Close" variant="btn-close float-end" onClick={toggleEditing}></ButtonComponent>

        <picture>
          {image && <img src={image} alt="" />}
        </picture>
        {title && <h2 className="section__card__title">{title}</h2>}
        <p><span>{formatDate(currentDate)}</span></p>
        {description && <><p className="section__card__description js-read-more is-expanded">{description}{description}</p><p className="section__card__description js-read-more is-expanded">{description}{description}</p></>}
        <div className="d-grid gap-2 col-6 mx-auto">
          <ButtonComponent type="button" variant="btn btn-outline-secondary" onClick={toggleEditing}>Fermer la modale</ButtonComponent>

        </div>
      </DialogModal>}

      <span className="read-more__link-wrap">
        {showButton && <ButtonComponent variant="read-more__link rounded" onClick={toggleEditing}>{buttonLabel}</ButtonComponent>}

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