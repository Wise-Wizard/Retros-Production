import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from '../../Screens/ProductSection/ProductScreen';

const MultiGridCarousel = ({ products }) => {
  return (
    <Carousel interval={null} indicators={false} touch>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <div className="row" style={{ backgroundColor: '#FEFBF6' }}>
            <div className="col-md-3">
              <ProductCard productDetails={product} />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MultiGridCarousel;
