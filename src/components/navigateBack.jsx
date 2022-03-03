import { Link } from "react-router-dom";

const NavigateBack = ({ currentPage }) => {
  return (
    <section className="navigate">
      <section className="section-center navigate-center">
        <Link to={"/"}>
          <h3 id="backtohome">home</h3>
        </Link>
        <h3>/</h3>
        <h3 id="navigatefrom">{currentPage}</h3>
      </section>
    </section>
  );
};

export default NavigateBack;
