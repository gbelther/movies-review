import { useEffect } from "react";
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

const Movie = () => {
  const theme = useTheme();
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const { id }: any = params;
      const response = await apimovies.get(`movies/${id}`);

      console.log(response);
    };

    getMovie();
  }, []);

  return (
    <Container>
      <MovieDetailWrapper>
        <Details>
          <Title>Homem-Aranha</Title>
          <ImageMovie src="images/homem-aranha.png" />
          <RatingWrapper>
            <StarsRating rating={4} />
          </RatingWrapper>
          <InfoWrapper>
            <Info>
              <strong>Ano: </strong> 2021
            </Info>
            <Info>
              <strong>Gênero: </strong> Aventura
            </Info>
            <Info>
              <strong>Diretor: </strong> Will Smith
            </Info>
            <Info>
              <strong>Elenco: </strong>
              Jack Chan, Will Smith, Jack Chan, Will Smith, Jack Chan, Will
              Smith, Jack Chan, Will Smith,
            </Info>
          </InfoWrapper>
        </Details>
      </MovieDetailWrapper>
      <MovieContentWrapper>
        <DescriptionWrapper>
          <DescriptionHeading>Descrição do Filme</DescriptionHeading>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ab
            minima in aperiam modi perspiciatis nemo culpa. Omnis, quis! Vitae
            natus nostrum aliquam, dolorem laudantium laborum perferendis
            ducimus in optio? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Velit ab minima in aperiam modi perspiciatis nemo
            culpa. Omnis, quis! Vitae natus nostrum aliquam, dolorem laudantium
            laborum perferendis ducimus in optio? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Velit ab minima in aperiam modi
            perspiciatis nemo culpa. Omnis, quis! Vitae natus nostrum aliquam,
            dolorem laudantium laborum perferendis ducimus in optio? Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Velit ab minima
            in aperiam modi perspiciatis nemo culpa. Omnis, quis! Vitae natus
            nostrum aliquam, dolorem laudantium laborum perferendis ducimus in
            optio?
          </Description>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                odio accusamus magnam autem eum officiis ad reiciendis, aut,
                odit, praesentium provident soluta recusandae molestiae eos
                doloremque. Consequuntur suscipit minus eligendi.
              </ReviewText>
            </Review>
            <Review>
              <ReviewInformation>
                Gabriel Belther Santos | 14/12/2021 às 12:58
              </ReviewInformation>
              <ReviewText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                odio accusamus magnam autem eum officiis ad reiciendis, aut,
                odit, praesentium provident soluta recusandae molestiae eos
                doloremque. Consequuntur suscipit minus eligendi.
              </ReviewText>
            </Review>
          </Reviews>
        </ReviewWrapper>
      </MovieContentWrapper>
    </Container>
  );
};

export default Movie;
