import { useGlobalContext } from "../context";

const Subscribe = () => {
  const { setValue, value, handleSubmit } = useGlobalContext();

  return (
    <section className="subscribe">
      <section className="section-center subscribe-center">
        <artilce className="subscribe-info">
          <h3 className="title-second">join our newsletter and get 20% off</h3>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </artilce>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={value}
            placeholder="enter email"
            onChange={(e) => setValue(e.target.value)}
            className="subscribe-input "
          />
          <button className="subscribe-btn btn">subscribe</button>
        </form>
      </section>
    </section>
  );
};

export default Subscribe;
