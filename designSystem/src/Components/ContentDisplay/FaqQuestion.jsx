import { useState } from "react";

export default function FaqQuestion({ question }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <details className="faq__box" open={isOpen ? "open" : ""} >
        <summary className="faq__header">
          {question.title}
        </summary>
        <div className="faq__content">
          {<p>{question.info}</p>}
        </div>
      </details>
    </>
  )
}