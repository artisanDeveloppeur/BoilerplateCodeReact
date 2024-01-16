import { useEffect, useState } from "react"


export function ScrollTop() {
  const [visible, setVisible] = useState(false)



  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      //console.log(scrolled)
      if (scrolled > 50) {
        setVisible(true)
      }
      else if (scrolled <= 50) {
        setVisible(false)
      }
    };
    window.addEventListener('scroll', toggleVisible);

    return () => window.addEventListener('scroll', toggleVisible);

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };


  return <>
    <div className="scroll-top" onClick={scrollToTop} style={{ display: visible ? 'grid' : 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 7 5" xmlns="http://www.w3.org/2000/svg" >
        <path d="M1,4l2.5,-3l2.5,3" stroke="#FFF" strokeWidth="1.4"></path>
      </svg>
    </div>
  </>
}