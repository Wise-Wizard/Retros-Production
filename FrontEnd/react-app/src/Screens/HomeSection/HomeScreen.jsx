import { useEffect } from "react";
import productListAction from "../../Actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";
import styles from "./HomeScreen.module.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LinkIcon from "@mui/icons-material/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ModelCarousel from "../../Components/HomeComponents/ModelCarousel";
import MultiGridCarousel from "../../Components/HomeComponents/Caraousel";
import { useNavigate } from "react-router-dom";
import DesktopCarousel from "../../Components/HomeComponents/DesktopCarousel";
import { useMediaQuery } from "react-responsive";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productList);
  const { loading, error, products } = allProducts;
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(productListAction());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error variant="danger" children={error} />
      ) : (
        <div className="home">
          {/* <h1 className="welcome-heading">Discover Retros</h1> */}
          {/* <div className={styles.button_Navbar}>
            <button
              className={styles.nav_Button}
              onClick={() => Navigate("/product/totebags")}
            >
              Tote Bags &nbsp;
              <ShoppingBagIcon fontSize="large" />
            </button>
            <button
              className={styles.nav_Button}
              onClick={() => Navigate("/product/bracelets")}
            >
              Bracelets &nbsp;
              <LinkIcon fontSize="large" />
            </button>
          </div>{" "} */}
          <ModelCarousel />
          <div className="bag_Section">
            {/* <h2 className="welcome-heading">
              Tote Bags */}

            {/* </h2> */}
            {isMobile ? (
              <MultiGridCarousel
                products={products.filter(
                  (product) => product.category === "Tote Bag"
                )}
              />
            ) : (
              <DesktopCarousel
                products={products.filter(
                  (product) => product.category === "Tote Bag"
                )}
              />
            )}
            <h5 className={styles.category_link}>
              <a href="/product/totebags">See All Collection</a>
              <ArrowForwardIcon
                fontSize="small"
                style={{ marginLeft: "4px", verticalAlign: "baseline" }}
              />
            </h5>
          </div>
          <div className="bracelet_Section">
            {/* <h2 className="welcome-heading">
              Bracelets */}

            {/* </h2> */}
            {isMobile ? (
              <MultiGridCarousel
                products={products.filter(
                  (product) => product.category === "Bracelet"
                )}
              />
            ) : (
              <DesktopCarousel
                products={products.filter(
                  (product) => product.category === "Bracelet"
                )}
              />
            )}
            <h5 className={styles.category_link}>
              <a href="/product/bracelets">See All Collection</a>
              <ArrowForwardIcon
                fontSize="small"
                style={{ marginLeft: "4px", verticalAlign: "baseline" }}
              />
            </h5>
          </div>
        </div>
      )}
    </>
  );
}
export default Home;
