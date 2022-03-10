import styled from "styled-components";
import bigBcg from "../assets/hero-bcg.jpeg";
import smallBcg from "../assets/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeWrapper>
      <section className="section-center page-100">
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
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  .img-container {
    display: none;
  }
  .title {
    width: 25rem;
    /* background-color: red; */
  }
  .subtitle {
    font-size: 1rem;
    line-height: 2;
    margin-bottom: 2rem;
    max-width: 45rem;
  }

  @media (min-width: 992px) {
    .img-container {
      display: block;
      position: relative;
      width: 30rem;
      height: 34rem;
      border-radius: 0.3rem;
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

    .section-center {
      display: flex;
      gap: 0 3rem;
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
  }
`;

export default Home;
