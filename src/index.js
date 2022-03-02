// import App from "./components/app.jsx";
import AppRoutes from "./route";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { AppProvider } from "./context";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Index = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </AppProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
