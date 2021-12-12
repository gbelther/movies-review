import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { StarsRating } from "../../components/StarsRating";
import { apimovies } from "../../services/api";

import {
  AddReviewTitle,
  AddReviewWrapper,
  Container,
  Description,
  DescriptionHeading,
  DescriptionWrapper,
  Details,
  ImageMovie,
  Info,
  InfoWrapper,
  MovieContentWrapper,
  MovieDetailWrapper,
  RatingWrapper,
  Review,
  ReviewField,
  ReviewInformation,
  Reviews,
  ReviewText,
  ReviewWrapper,
  Title,
} from "./styles";

interface ICategory {
  id: string;
  name: string;
}
interface IMovie {
  id: string;
  name: string;
  rating: number;
  image: string;
  description: string;
  category: ICategory;
  cast: string[];
  year: number;
  director: string;
}

const Movie = () => {
  const theme = useTheme();
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState<IMovie>();

  useEffect(() => {
    const getMovie = async () => {
      const { id }: any = params;
      const response = await apimovies.get(`movies/${id}`);

      const {
        id: movieId,
        name,
        rating,
        image,
        description,
        category,
        cast,
        year,
        director,
      } = response.data;

      setMovieDetails({
        id: movieId,
        name,
        rating,
        image,
        description,
        category,
        cast,
        year,
        director,
      });
    };

    getMovie();
  }, [params]);

  return (
    <Container>
      {!!movieDetails && (
        <>
          <MovieDetailWrapper>
            <Details>
              <Title>{movieDetails.name}</Title>
              <ImageMovie src={movieDetails.image} />
              <RatingWrapper>
                <StarsRating rating={movieDetails.rating} />
              </RatingWrapper>
              <InfoWrapper>
                <Info>
                  <strong>Ano: </strong> {movieDetails.year}
                </Info>
                <Info>
                  <strong>Gênero: </strong> {movieDetails.category.name}
                </Info>
                <Info>
                  <strong>Diretor: </strong> {movieDetails.director}
                </Info>
                <Info>
                  <strong>Elenco: </strong>
                  {movieDetails.cast}
                </Info>
              </InfoWrapper>
            </Details>
          </MovieDetailWrapper>
          <MovieContentWrapper>
            <DescriptionWrapper>
              <DescriptionHeading>Descrição do Filme</DescriptionHeading>
              <Description>{movieDetails.description}</Description>
            </DescriptionWrapper>
            <ReviewWrapper>
              <AddReviewWrapper>
                <AddReviewTitle>
                  <strong>Deixe sua avaliação</strong>
                  <StarsRating rating={3} />
                </AddReviewTitle>
                <ReviewField />
                <Button backgroundColor={theme.colors.secondary}>Postar</Button>
              </AddReviewWrapper>
              <Reviews>
                <Review>
                  <ReviewInformation>
                    Gabriel Belther Santos | 14/12/2021 às 12:58
                  </ReviewInformation>
                  <ReviewText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi odio accusamus magnam autem eum officiis ad
                    reiciendis, aut, odit, praesentium provident soluta
                    recusandae molestiae eos doloremque. Consequuntur suscipit
                    minus eligendi.
                  </ReviewText>
                </Review>
                <Review>
                  <ReviewInformation>
                    Gabriel Belther Santos | 14/12/2021 às 12:58
                  </ReviewInformation>
                  <ReviewText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi odio accusamus magnam autem eum officiis ad
                    reiciendis, aut, odit, praesentium provident soluta
                    recusandae molestiae eos doloremque. Consequuntur suscipit
                    minus eligendi.
                  </ReviewText>
                </Review>
              </Reviews>
            </ReviewWrapper>
          </MovieContentWrapper>
        </>
      )}
    </Container>
  );
};

export default Movie;
