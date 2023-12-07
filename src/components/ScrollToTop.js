import React from 'react';

function ScrollToTop() {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  };

  return (
    <button id="btnScrollToTop" onClick={scrollToTop}>
      <i>↑</i>
    </button>
  );
}

export default ScrollToTop;
