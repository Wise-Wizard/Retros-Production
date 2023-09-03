import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavourites } from "../../Actions/favouritesAction";
import productListAction from "../../Actions/productsAction";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductSection/ProductScreen";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MultiGridCarousel from "../../Components/HomeComponents/Caraousel";

function FavouritesScreen() {
  const dispatch = useDispatch();
  const favProducts = useSelector((state) => state.userFavourites);
  const allProducts = useSelector((state) => state.productList);
  const { products } = allProducts;
  const { loading, error, userFav } = favProducts;

  useEffect(() => {
    dispatch(getFavourites());
    dispatch(productListAction());
    window.scrollTo(0, 0);
  }, [dispatch]);

  // Use the useMediaQuery hook to get the screen width
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (loading) {
    return <Loader />;
  }

  if (error || !userFav || !products) {
    return <Error variant="danger" children={error} />;
  }

  const favouriteProducts = products.filter((product) => {
    return userFav.favourites.includes(product._id);
  });

  if (favouriteProducts.length === 0) {
    return (
      <>
        <h1>You have no favourites!</h1>
        <Link to="/">
          <h2>Go Back</h2>
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="welcome-heading">Your Picks</h1>
      {isMobile ? (
        <Row>
          <Col md={12}>
            {/* Render the carousel for mobile view */}
            <MultiGridCarousel products={favouriteProducts} />
          </Col>
        </Row>
      ) : (
        <Row>
          {favouriteProducts.map((product) => (
            <Col key={product._id} md={3}>
              <ProductCard productDetails={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default FavouritesScreen;
