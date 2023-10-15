import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <hr className="hr1"></hr>
      <h1 className="text-center">Menu Items</h1>
      <div>
        <Card />
      </div>
      <hr className="hr1"></hr>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
