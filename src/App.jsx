import { Switch, Route } from 'react-router-dom';
import TopBar from "./layout/TopBar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import './App.css';
import HomePage from "./pages/Hompeage";
import ShopPage from "./pages/ShopPage";
import Bottom from "./layout/Bottom";
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4">
      <TopBar />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/product" component={ProductPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;