import { useEffect, useState } from "react";

export function useTypewriter({ text, delay, infinite }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // once onnly
  /*
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
  
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text]);
  */
  // infinite loop
  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) { // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <strong>{currentText}</strong>;
}
/*
export function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
*/




