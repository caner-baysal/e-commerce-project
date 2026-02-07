import TopBar from "./layout/TopBar"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import './App.css';
import HomePage from "./pages/Hompeage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <HomePage />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;