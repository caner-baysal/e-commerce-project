import { Switch, Route } from 'react-router-dom';
import TopBar from "./layout/TopBar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import './App.css';
import HomePage from "./pages/Hompeage";
import ShopPage from "./pages/ShopPage";
import Bottom from "./layout/Bottom";
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { autoLogin } from './actions/clientActions';
import { fetchCategories, fetchProducts } from './actions/productActions';

import OrderPage from './pages/OrderPage';
import PreviousOrdersPage from './pages/PreviousOrdersPage';
import CartPage from './pages/CartPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4">
      <TopBar />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductPage} />
        <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/order" component={OrderPage} />
        <Route exact path="/orders" component={PreviousOrdersPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;