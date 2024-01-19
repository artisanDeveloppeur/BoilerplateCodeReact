import { useState } from "react";
import { AccordionItem } from "./AccordionItem.jsx";

const accordionData = [
  {
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
  },
  {
    question: "What are they use for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."
  },
  {
    question: "Can i create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework."
  }
];
//  accordionitem component

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};


