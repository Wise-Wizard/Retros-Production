import React, { useEffect, useRef } from "react";
import styles from "../../Screens/HomeSection/HomeScreen.module.css"; // Import the CSS file with animation styles

const ImageScrollAnimation = ({ imageUrl }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = imageRef.current.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollPosition > elementPosition - windowHeight / 2) {
        imageRef.current.style.animationPlayState = "running";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={imageUrl}
      alt="ImageMain"
      className={styles.main_Image}
    />
  );
};

export default ImageScrollAnimation;
