import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";

import { Button } from "../../components/Button";
import { ModalMovie } from "../../components/ModalMovie";
import { Spinner } from "../../components/Spinner";
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
  MovieEditWrapper,
  RatingWrapper,
  Review,
  ReviewField,
  ReviewInformation,
  Reviews,
  ReviewText,
  ReviewWrapper,
  Title,
} from "./styles";

interface IComment {
  id: number;
  movieId: number;
  author: string;
  date: string;
  comment: string;
}

interface IReview {
  author: string;
  rating: number;
  comment: string;
}

interface ICategory {
  id: number;
  name: string;
}
interface IMovie {
  id: number;
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

  const [showModalMovie, setShowModalMovie] = useState(false);
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [loadingSubmitComment, setLoadingSubmitComment] = useState(false);
  const [movieDetails, setMovieDetails] = useState<IMovie>();
  const [comments, setComments] = useState<IComment[]>([]);
  const [review, setReview] = useState<IReview>({
    author: "",
    rating: 1,
    comment: "",
  });

  useEffect(() => {
    const getMovie = async () => {
      try {
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
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingMovie(false);
      }
    };

    setLoadingMovie(true);
    getMovie();
  }, [params]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { id }: any = params;

        const response = await apimovies.get("comments", {
          params: {
            movieId: id,
          },
        });

        const commentsFormatted: IComment[] = response.data.map(
          (commentData: IComment) => {
            const {
              id: commentId,
              movieId,
              author,
              date,
              comment,
            } = commentData;

            return {
              id: commentId,
              movieId,
              author,
              date: new Intl.DateTimeFormat("pt-BR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }).format(new Date(date)),
              comment,
            };
          }
        );

        setComments(commentsFormatted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingComments(false);
      }
    };

    setLoadingComments(true);
    getComments();
  }, [params]);

  const handleSelectRating = (rating: number) => {
    setReview((prevState) => ({
      ...prevState,
      rating,
    }));
  };

  const handleCommentHandle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReview((prevState) => ({
      ...prevState,
      comment: event.target.value,
    }));
  };

  const handleSubmitReview = async () => {
    setLoadingSubmitComment(true);

    try {
      const { id }: any = params;

      const reviewData = {
        movieId: Number(id),
        author: review.author,
        date: new Date(),
        comment: review.comment,
        rating: review.rating,
      };

      const response = await apimovies.post("comments", reviewData);

      const { id: commentId, movieId, author, date, comment } = response.data;

      setComments((prevState) => [
        ...prevState,
        {
          id: commentId,
          movieId,
          author,
          date,
          comment,
        },
      ]);

      setReview({
        author: "",
        rating: 1,
        comment: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSubmitComment(false);
    }
  };

  return (
    <Container>
      {loadingMovie ? (
        <Spinner />
      ) : (
        !!movieDetails && (
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
                    {movieDetails.cast.map((cast, index) =>
                      movieDetails.cast.length - 1 === index
                        ? `${cast}.`
                        : `${cast}, `
                    )}
                  </Info>
                </InfoWrapper>
                <MovieEditWrapper>
                  <Button
                    backgroundColor={theme.colors.warning}
                    onClick={() => setShowModalMovie(true)}
                  >
                    EDITAR
                  </Button>
                </MovieEditWrapper>
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
                    <StarsRating
                      rating={review.rating}
                      isSelectable
                      onSelectStar={handleSelectRating}
                    />
                  </AddReviewTitle>
                  <ReviewField
                    value={review.comment}
                    onChange={handleCommentHandle}
                  />
                  <Button
                    backgroundColor={theme.colors.secondary}
                    onClick={() => handleSubmitReview()}
                  >
                    {loadingSubmitComment ? (
                      <Spinner />
                    ) : (
                      <strong>Postar</strong>
                    )}
                  </Button>
                </AddReviewWrapper>
                <Reviews>
                  {loadingComments ? (
                    <Spinner />
                  ) : (
                    comments.map((comment) => (
                      <Review key={comment.id}>
                        <ReviewInformation>
                          {comment.author || "Autor desconhecido"} |{" "}
                          {comment.date}
                        </ReviewInformation>
                        <ReviewText>{comment.comment}</ReviewText>
                      </Review>
                    ))
                  )}
                </Reviews>
              </ReviewWrapper>
            </MovieContentWrapper>
          </>
        )
      )}
      {showModalMovie && (
        <ModalMovie
          show={showModalMovie}
          onClose={() => setShowModalMovie(false)}
          type="edit"
          currentInfos={
            movieDetails && {
              id: movieDetails.id,
              name: movieDetails.name,
              description: movieDetails.description,
              category: movieDetails.category,
              cast: movieDetails.cast,
              year: movieDetails.year,
              director: movieDetails.director,
            }
          }
        />
      )}
    </Container>
  );
};

export default Movie;
