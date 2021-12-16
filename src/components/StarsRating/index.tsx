import { useMemo } from "react";

import { Container, EmptyStar, FillStar } from "./styles";

interface IStarsRatingProps {
  starsQuantity?: number;
  selectable?: boolean;
  rating: number;
  onSelectStar?: (rating: number) => void;
}

const StarsRating = ({
  starsQuantity = 5,
  rating,
  selectable = false,
  onSelectStar,
}: IStarsRatingProps) => {
  const starsArray = useMemo(() => {
    const ratingRounded = Math.round(rating);
    return [...Array(starsQuantity)].map((_, index) => index < ratingRounded);
  }, [rating, starsQuantity]);

  const handleSelectStar = (index: number) => {
    if (selectable && onSelectStar) {
      onSelectStar && onSelectStar(index + 1);
    }
  };

  return (
    <Container>
      {starsArray.map((star, index) =>
        star ? (
          <FillStar
            title="star-fill"
            key={`${index}-fill`}
            selectable={selectable}
            onClick={() => handleSelectStar(index)}
          />
        ) : (
          <EmptyStar
            title="star-empty"
            key={`${index}-empty`}
            selectable={selectable}
            onClick={() => handleSelectStar(index)}
          />
        )
      )}
    </Container>
  );
};

export { StarsRating };
