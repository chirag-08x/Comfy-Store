import aboutImage from "../assets/hero-bcg.jpeg";
import NavigateBack from "../components/navigateBack";

const About = () => {
  return (
    <>
      <NavigateBack currentPage={"about"} />
      <section className="about">
        <section className="section-center about-center">
          <div className="about-img-container">
            <img src={aboutImage} alt="" />
          </div>

          <section className="story">
            <h2 className="title-second">our story</h2>
            <div className="underline"></div>
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
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
