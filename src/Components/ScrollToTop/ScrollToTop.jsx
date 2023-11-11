import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${styles['scroll-container']}`}>
      {isVisible && (
        <button onClick={scrollToTop} className={`${styles["scroll-button"]}`}>
          <i class="fa-solid fa-circle-chevron-up text-main"></i>
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;