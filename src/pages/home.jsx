import styled from "styled-components";
import bigBcg from "../assets/hero-bcg.jpeg";
import smallBcg from "../assets/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";
import Tiles from "../components/tiles";
import Subscribe from "../components/subsribe";
import FeaturedProducts from "../components/featuredProducts";

const Home = () => {
  return (
    <HomeWrapper>
      <section className="section-center home-center">
        <article className="home-text">
          <h1 className="title">design your comfort zone</h1>
          <p className="subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to={"/products"}>
            <button className="btn">shop now</button>
          </Link>
        </article>

        <article className="img-container">
          <img src={bigBcg} className="big-img" alt="" />
          <img src={smallBcg} className="small-img" alt="" />
        </article>
      </section>
      <FeaturedProducts />
      <Tiles />
      <Subscribe />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  .img-container {
    display: none;
  }

  .home-text {
    .title {
      width: 25rem;
    }
    .subtitle {
      font-size: 1rem;
      line-height: 2;
      margin-bottom: 2rem;
      max-width: 45rem;
    }
  }

  @media (min-width: 992px) {
    .img-container {
      display: block;
      position: relative;
      width: 28rem;
      height: 34rem;
      border-radius: 0.3rem;
    }

    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.25rem;
      max-width: 35rem;
    }

    .img-container::before {
      content: "";
      display: block;
      width: 10%;
      height: 80%;
      background-color: var(--clr-primary-5);
      position: absolute;
      bottom: 0;
      left: -8%;
      border-radius: 0.3rem;
      z-index: -1;
    }

    .home-center {
      display: flex;
      gap: 0 5rem;
      justify-content: space-between;
      align-items: center;
    }

    .big-img {
      border-radius: 0.3rem;
    }

    .small-img {
      position: absolute;
      width: 15rem;
      height: 10rem;
      bottom: 0;
      left: 0;
      transform: translateX(-50%);
      border-radius: 0.3rem;
    }

    .btn {
      padding: 0.875rem 1.5rem;
    }
  }
`;

export default Home;
