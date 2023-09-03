import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../../Screens/ProductSection/ProductScreen";

const DesktopCarousel = ({ products }) => {
  const chunkSize = 4; // Number of products to display per slide

  // Split products into chunks of size 'chunkSize'
  const productChunks = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    productChunks.push(products.slice(i, i + chunkSize));
  }

  return (
    <Carousel interval={null}>
      {productChunks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="row" style={{ backgroundColor: "#FEFBF6" }}>
            {chunk.map((product, idx) => (
              <div className="col-md-3" key={idx}>
                <ProductCard productDetails={product} />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default DesktopCarousel;
