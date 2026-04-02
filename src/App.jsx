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
import TeamPage from './pages/TeamPage';
import SignUpPage from './pages/SignUpPage';




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
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;