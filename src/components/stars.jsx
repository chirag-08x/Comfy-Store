import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <StarsWrapper>
      <div className="stars">{tempStars}</div>
      <div className="reviews">
        <p>({reviews} customer reviews)</p>
      </div>
    </StarsWrapper>
  );
};

const StarsWrapper = styled.section`
  display: flex;
  gap: 0 1rem;

  .stars {
    display: flex;
    gap: 0 0.25rem;

    span {
      color: var(--clr-gold);
    }
  }

  .reviews {
    p {
      color: var(--clr-dark);
      font-size: 1rem;
    }
  }
`;

export default Stars;

// Alternate approach for star ----

// for (let i = 1; i <= 5; i++) {
//   if (stars >= 1) {
//     final.push("full filled");
//   } else if (stars < 0) {
//     final.push("empty");
//   } else if (stars < 1) {
//     final.push("half filled");
//   }

//   stars -= 1;
// }
