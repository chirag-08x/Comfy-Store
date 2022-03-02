import { Link } from "react-router-dom";
import heroImage from "../assets/hero-bcg.jpeg";
import heroImageSmall from "../assets/hero-bcg-2.jpeg";
import Featured from "../components/featured";
import InfoTiles from "../components/infotiles";
import Subscribe from "../components/subscribe";
// import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <section className="home">
        <section className="section-center home-center">
          <article className="home-text">
            <h1 className="title">design your comfort zone</h1>
            <p className="subtitle">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <Link to={"/products"}>
              <button className="btn">shop now</button>
            </Link>
          </article>

          <article className="home-img-container">
            <img className="hero-img" src={heroImage} alt="" />
            <img className="hero-img-small" src={heroImageSmall} alt="" />
          </article>
        </section>
      </section>
      <Featured />
      <InfoTiles />
      <Subscribe />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
