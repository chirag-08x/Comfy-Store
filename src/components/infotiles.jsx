import { tiles } from "../data.js";

const InfoTiles = () => {
  return (
    <section className="info-tiles">
      <section className="section-center">
        <article className="info-container">
          <h3 className="title-second info-title">
            custom furniture built only for you
          </h3>
          <p className="subtitle info-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <article className="tiles">
          {tiles.map((tile) => {
            const { id, title, subtitle, icon } = tile;
            return (
              <div key={id} className="single-tile">
                <span className="tile-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            );
          })}
        </article>
      </section>
    </section>
  );
};

export default InfoTiles;
