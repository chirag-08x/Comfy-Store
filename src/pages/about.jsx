import NavigateBar from "../components/navigatebar";
import styled from "styled-components";
import image from "../assets/hero-bcg.jpeg";

const About = () => {
  return (
    <AboutWrapper>
      <NavigateBar title="about" />
      <section className="section-center page">
        <article className="img-container">
          <img src={image} alt="" />
        </article>

        <article className="about-info">
          <article className="title">
            <h1>our story</h1>
            <div className="underline"></div>
          </article>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </section>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  /* background-color: yellow; */
  .img-container {
    height: 32rem;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
    img {
      border-radius: 0.3rem;
    }
  }
  .title {
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2rem;
  }
  .underline {
    margin: initial;
  }
  p {
    line-height: 2;
    font-size: 0.875rem;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 4rem;
    }
  }
`;

export default About;
