import { useMemo } from "react";

import { Container, EmptyStar, FillStar } from "./styles";

interface IStarsRatingProps {
  starsQuantity?: number;
  isSelectable?: boolean;
  rating: number;
  onSelectStar?: (rating: number) => void;
}

const StarsRating = ({
  starsQuantity = 5,
  rating,
  isSelectable = false,
  onSelectStar,
}: IStarsRatingProps) => {
  const starsArray = useMemo(() => {
    const ratingRounded = Math.round(rating);
    return [...Array(starsQuantity)].map((_, index) => index < ratingRounded);
  }, [rating, starsQuantity]);

  const handleSelectStar = (index: number) => {
    if (isSelectable && onSelectStar) {
      onSelectStar && onSelectStar(index + 1);
    }
  };

  return (
    <Container>
      {starsArray.map((star, index) =>
        star ? (
          <FillStar
            key={`${index}-fill`}
            isSelectable={isSelectable}
            onClick={() => handleSelectStar(index)}
          />
        ) : (
          <EmptyStar
            key={`${index}-empty`}
            isSelectable={isSelectable}
            onClick={() => handleSelectStar(index)}
          />
        )
      )}
    </Container>
  );
};

export { StarsRating };
