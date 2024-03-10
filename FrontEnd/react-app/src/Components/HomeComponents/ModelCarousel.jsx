import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ModelCarousel.css";

const ModelCarousel = () => {
  const products = [
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710067227/Retros/IMG_8803_vw5y4t.jpg?_s=public-apps",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710067327/Retros/IMG_0768_hghsmz.jpg?_s=public-apps",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710067324/Retros/IMG_4191_af0sai.jpg?_s=public-apps",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710067347/Retros/IMG_1225.jpeg_k6kdgh.jpg?_s=public-apps",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710067205/Retros/IMG_8794_q1v4gm.jpg?_s=public-apps",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710067249/Retros/IMG_4853_q7vtpk.jpg?_s=public-apps",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710067361/Retros/IMG_4096_ksffeu.jpg?_s=public-apps",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710067257/Retros/IMG_1226.jpeg_qe0hqt.jpg?_s=public-apps",
    },
  ];

  return (
    <Carousel interval={3000} indicators={false} touch>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <div className="main_Image">
            <img src={product.imageUrl} alt={`Model ${index + 1}`} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ModelCarousel;
