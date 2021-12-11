import { ChangeEvent, useEffect, useState } from "react";

import { StarsRating } from "../../components/StarsRating";

import {
  Button,
  Container,
  ContentMoviesWrapper,
  MovieAction,
  MovieDescription,
  MovieInfos,
  MovieItem,
  MovieRating,
  MovieList,
  MovieTitle,
  MovieWrapper,
  ImgMovie,
  InputCheck,
  InputCheckWrapper,
  Label,
  GenreItemWrapper,
  GenreItem,
  GenreFilterTitle,
  GenreFilterWrapper,
} from "./styles";

interface IMovie {
  id: string;
  name: string;
  rating: number;
  image: string;
  description: string;
  categoryId: string;
}

const movies: IMovie[] = [
  {
    id: "movie-1",
    name: "Homem-Aranha",
    rating: 3.4,
    image: "images/homem-aranha.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aperiam omnis possimus ducimus doloremque tempora distinctio magnam voluptatum sequi unde quibusdam, voluptates eligendi exercitationem nesciunt? Magni non dolorem expedita? Adipisci!",
    categoryId: "cat-2",
  },
  {
    id: "movie-2",
    name: "Capitão América",
    rating: 4.65,
    image: "images/homem-aranha.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aperiam omnis possimus ducimus doloremque tempora distinctio magnam voluptatum sequi unde quibusdam, voluptates eligendi exercitationem nesciunt? Magni non dolorem expedita? Adipisci!",
    categoryId: "cat-1",
  },
  {
    id: "movie-3",
    name: "Os Vingadores",
    rating: 4.2,
    image: "images/homem-aranha.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aperiam omnis possimus ducimus doloremque tempora distinctio magnam voluptatum sequi unde quibusdam, voluptates eligendi exercitationem nesciunt? Magni non dolorem expedita? Adipisci!",
    categoryId: "cat-3",
  },
];

const categories = [
  {
    id: "cat-1",
    name: "Ação",
  },
  {
    id: "cat-2",
    name: "Aventura",
  },
  {
    id: "cat-3",
    name: "Romance",
  },
];

const Home = () => {
  const [moviesFiltered, setMoviesFiltered] = useState<IMovie[]>(movies);
  const [categoriesIdAvailable, setCategoriesIdAvailable] = useState(() => {
    return categories.map((category) => category.id);
  });

  useEffect(() => {
    const moviesAvailable = movies.filter((movie) =>
      categoriesIdAvailable.includes(movie.categoryId)
    );

    setMoviesFiltered(moviesAvailable);
  }, [categoriesIdAvailable]);

  const handleFilterByCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const categoryId = event.target.value;

    const isActive = categoriesIdAvailable.includes(categoryId);

    if (isActive) {
      setCategoriesIdAvailable((prevState) =>
        prevState.filter((currentId) => currentId !== categoryId)
      );
    } else {
      setCategoriesIdAvailable((prevState) => [...prevState, categoryId]);
    }
  };

  return (
    <Container>
      <GenreFilterWrapper>
        <GenreFilterTitle>Filtros</GenreFilterTitle>
        <GenreItemWrapper>
          {categories.map((category) => (
            <GenreItem key={category.id}>
              <InputCheckWrapper>
                <InputCheck
                  type="checkbox"
                  id={`${category.id}`}
                  value={`${category.id}`}
                  checked={categoriesIdAvailable.includes(category.id)}
                  onChange={handleFilterByCategory}
                />
                <Label htmlFor={`${category.id}`}>{category.name}</Label>
              </InputCheckWrapper>
            </GenreItem>
          ))}
        </GenreItemWrapper>
      </GenreFilterWrapper>
      <ContentMoviesWrapper>
        <MovieList>
          {moviesFiltered.map((movie) => (
            <MovieItem key={movie.id}>
              <ImgMovie src="images/homem-aranha.png" />
              <MovieWrapper>
                <MovieInfos>
                  <MovieTitle>{movie.name}</MovieTitle>
                  <MovieDescription>{movie.description}</MovieDescription>
                </MovieInfos>
                <MovieAction>
                  <MovieRating>
                    <StarsRating rating={movie.rating} />
                  </MovieRating>
                  <Button>DETALHES</Button>
                </MovieAction>
              </MovieWrapper>
            </MovieItem>
          ))}
        </MovieList>
      </ContentMoviesWrapper>
    </Container>
  );
};

export default Home;
