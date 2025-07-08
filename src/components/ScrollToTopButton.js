import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary"
        style={{ position: "fixed", bottom: "40px", right: "30px", zIndex: 999 }}
      >
        ⬆️ Scroll Up
      </button>
    )
  );
};

export default ScrollToTopButton;