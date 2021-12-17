import { useMemo } from "react";
import { useTheme } from "styled-components";

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
  const theme = useTheme();

  const starsArray = useMemo(() => {
    const ratingRounded = rating <= 0 ? 1 : Math.round(rating);
    const starsQuantityRounded = starsQuantity <= 0 ? 1 : starsQuantity;

    return [...Array(starsQuantityRounded)].map(
      (_, index) => index < ratingRounded
    );
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
            color={theme.colors.yellow_rating}
            key={`${index}-fill`}
            selectable={selectable ? selectable : undefined}
            onClick={() => handleSelectStar(index)}
          />
        ) : (
          <EmptyStar
            title="star-empty"
            color={theme.colors.yellow_rating}
            key={`${index}-empty`}
            selectable={selectable ? selectable : undefined}
            onClick={() => handleSelectStar(index)}
          />
        )
      )}
    </Container>
  );
};

export { StarsRating };
