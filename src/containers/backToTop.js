import { React, useEffect, useState } from "react";
import { ArrowUpCircleFill } from "react-bootstrap-icons";
import './backToTop.scss';

export default function BackToTop() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0, make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return(
    <div>
      {isVisible ?
        <ArrowUpCircleFill size={30} className="backToTop" onClick={scrollToTop} alt='Go to top'/>
      : ''}
    </div>
  );
}