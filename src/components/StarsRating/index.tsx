import { useMemo } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container } from "./styles";

interface IStarsRatingProps {
  starsQuantity?: number;
  rating: number;
}

const StarsRating = ({ starsQuantity = 5, rating }: IStarsRatingProps) => {
  const fillStarsArray = useMemo(() => {
    return [...Array(Math.round(rating)).map((number) => `${number}-fill`)];
  }, [rating]);

  const emptyStarsArray = useMemo(() => {
    return [
      ...Array(starsQuantity - fillStarsArray.length).map(
        (number) => `${number}-empty`
      ),
    ];
  }, [fillStarsArray, starsQuantity]);

  return (
    <Container>
      {fillStarsArray.map((star) => (
        <AiFillStar key={star} color="yellow" />
      ))}
      {emptyStarsArray.map((star) => (
        <AiOutlineStar key={star} color="yellow" />
      ))}
    </Container>
  );
};

export { StarsRating };
