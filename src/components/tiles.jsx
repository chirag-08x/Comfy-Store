import styled from "styled-components";
import { tiles } from "../utils/utils";

const Tiles = () => {
  return (
    <TilesWrapper>
      <section className="section-center">
        <article className="header">
          <h3>custom furniture built only for you</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>

        <div className="tiles">
          {tiles.map((tile) => {
            const { id, icon, text } = tile;
            return (
              <div key={id} className="tile">
                <div className="icon">{icon}</div>
                <h3>{text}</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                  velit autem unde numquam nisi
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </TilesWrapper>
  );
};

const TilesWrapper = styled.section`
  background-color: var(--clr-primary-3);

  .header {
    margin-bottom: 3rem;
    h3 {
      max-width: 15rem;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: var(--clr-primary-1);
    }

    p {
      color: var(--clr-primary-6);
    }
  }

  .tiles {
    display: grid;
    gap: 2rem 2rem;
  }

  .tile {
    background-color: var(--clr-primary-4);
    display: grid;
    place-items: center;
    padding: 3rem 1rem;
    border-radius: 0.3rem;

    .icon {
      background-color: var(--clr-primary-3);
      padding: 1rem;
      border-radius: 50%;
      font-size: 2rem;
      display: grid;
      place-items: center;
      margin-bottom: 1rem;
    }

    h3 {
      color: var(--clr-primary-1);
    }

    p {
      text-align: center;
      color: var(--clr-primary-1);
    }
  }

  @media (min-width: 845px) {
    .tiles {
      grid-template-columns: 1fr 1fr;

      p {
        font-size: 1rem;
      }
    }

    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      h3 {
        font-size: 2rem;
        max-width: 20rem;
      }
    }
  }

  @media (min-width: 1220px) {
    height: 29rem;

    .tiles {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Tiles;
