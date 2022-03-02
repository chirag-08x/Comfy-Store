import { Link } from "react-router-dom";

const NavigateBack = ({ currentPage }) => {
  return (
    <section className="section-center">
      <Link to={"/"}>
        <h3>home</h3>
      </Link>
      <h3>/{currentPage}</h3>
    </section>
  );
};

export default NavigateBack;
