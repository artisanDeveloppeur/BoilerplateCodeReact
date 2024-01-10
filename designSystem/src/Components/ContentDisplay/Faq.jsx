import FaqQuestion from "./FaqQuestion";

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "This is a good product lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "The price is xxx € lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];

export function Faq() {
  return (
    <>
      <section className="faq faq__section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq__container">
          {questions.map((question) => (
            <FaqQuestion key={question.id} question={question} />
          ))}
        </div>
      </section>
    </>
  )
}