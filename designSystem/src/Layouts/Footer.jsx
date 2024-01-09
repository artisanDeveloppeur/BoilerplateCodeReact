import React, { useState, useEffect } from 'react';

export function Footer() {
  const [dateYear, setDateYear] = useState();

  const getYear = () => setDateYear(new Date().getFullYear())


  useEffect(() => {
    getYear();
  }, [])
  return <>
    <footer className='txt-center'>
      <p>Artisan Développeur &copy; {dateYear}</p>
    </footer>
  </>
}