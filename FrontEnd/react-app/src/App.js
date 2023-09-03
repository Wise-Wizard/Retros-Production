import Footer from "./Components/ConstComponents/Footer.jsx";
import Header from "./Components/ConstComponents/Header.jsx";
import { Container } from "react-bootstrap";
import Home from "./Screens/HomeSection/HomeScreen.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./Screens/ProductSection/ProductDetails";
import Cart from "./Screens/CartSection/CartScreen.jsx";
import LoginScreen from "./Screens/ProfileSection/LoginScreen.jsx";
import RegisterScreen from "./Screens/ProfileSection/RegisterScreen.jsx";
import ProfileScreen from "./Screens/ProfileSection/ProfileScreen.jsx";
import ShippingScreen from "./Screens/CartSection/ShippingScreen.jsx";
import Payment from "./Screens/PaymentSection/PaymentScreen.jsx";
import PlaceOrderScreen from "./Screens/PaymentSection/PlaceOrderScreen.jsx";
import ToteBagScreen from "./Screens/CategoriesSection/ToteBagScreen.jsx";
import BraceletScreen from "./Screens/CategoriesSection/BraceletScreen.jsx";
import FavouritesScreen from "./Screens/HomeSection/FavouritesScreen.jsx";
import OrderListScreen from "./Screens/AdminSection/OrderListScreen.jsx";
import ProductListScreen from "./Screens/AdminSection/ProductListScreen.jsx";
import ProductEditScreen from "./Screens/AdminSection/ProductEditScreen.jsx";
import UserListScreen from "./Screens/AdminSection/UserListScreen.jsx";
import UserEditScreen from "./Screens/AdminSection/UserEditScreen.jsx";
import AdminRoute from "./Components/ConstComponents/AdminRoutes.jsx";
import OrderScreen from "./Screens/PaymentSection/OrderScreen.jsx";
import CreateProductScreen from "./Screens/AdminSection/CreateProductScreen.jsx";
// import Spline from "@splinetool/react-spline";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container style={{ maxWidth: "1450px" }}>
          {/* <Spline scene="https://prod.spline.design/ufgec588jlu77XD9/scene.splinecode" /> */}
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/register" element={<RegisterScreen />} exact />
            <Route path="/login" element={<LoginScreen />} exact />
            <Route path="/profile" element={<ProfileScreen />} exact />
            <Route path="/favourites" element={<FavouritesScreen />} exact />
            <Route path="/product/:id" element={<ProductPage />} exact />
            <Route path="/product/totebags" element={<ToteBagScreen />} exact />
            <Route
              path="/product/bracelets"
              element={<BraceletScreen />}
              exact
            />
            <Route path="/cart/:id?" element={<Cart />} exact />
            <Route path="/shipping" element={<ShippingScreen />} exact />
            <Route path="/payment" element={<Payment />} exact />
            <Route path="/placeorder" element={<PlaceOrderScreen />} exact />
            <Route path="/order/:id?" element={<OrderScreen />} exact />
            {/* Admin users */}
            <Route path="" element={<AdminRoute />}>
              <Route path="/admin/orderlist" element={<OrderListScreen />} />
              <Route
                path="/admin/productlist"
                element={<ProductListScreen />}
              />
              <Route
                path="/admin/productlist/:pageNumber"
                element={<ProductListScreen />}
              />
              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
              <Route
                path="/admin/product/create"
                element={<CreateProductScreen />}
              />
              {/* <Route path="/admin/user/:id/edit" element={<UserEditScreen />} /> */}
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
