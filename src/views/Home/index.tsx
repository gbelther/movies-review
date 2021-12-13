import { ChangeEvent, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useHistory } from "react-router-dom";

import { Button } from "../../components/Button";
import { StarsRating } from "../../components/StarsRating";
import { ModalMovie } from "../../components/ModalMovie";
import { apimovies } from "../../services/api";

import {
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
  SearchFilterWrapper,
  InputTextFilter,
} from "./styles";

interface ICategory {
  id: number;
  name: string;
}
export interface IMovie {
  id: number;
  name: string;
  rating: number;
  image: string;
  description: string;
  category: ICategory;
}

const Home = () => {
  const theme = useTheme();
  const history = useHistory();

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [moviesFiltered, setMoviesFiltered] = useState<IMovie[]>(movies);
  const [filterText, setFilterText] = useState("");
  const [categoriesIdAvailable, setCategoriesIdAvailable] = useState(() => {
    return categories.map((category) => category.id);
  });
  const [showModalMovie, setShowModalMovie] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const categoriesId = Array.from(
      new Set(movies.map((movie) => movie.category.id))
    );

    const categoriesFormatted = categoriesId.map(
      (id) => movies.filter((movie) => movie.category.id === id)[0]?.category
    );

    setCategoriesIdAvailable(categoriesId);
    setCategories(categoriesFormatted);
  }, [movies]);

  useEffect(() => {
    const moviesAvailable = movies.filter(
      (movie) =>
        categoriesIdAvailable.includes(movie.category.id) &&
        movie.name.toLowerCase().includes(filterText)
    );

    setMoviesFiltered(moviesAvailable);
  }, [categoriesIdAvailable, filterText, movies]);

  const getMovies = async () => {
    const response = await apimovies.get("movies");

    const moviesFormatted: IMovie[] = response.data.map((movie: IMovie) => {
      const { id, name, rating, image, description, category } = movie;

      return {
        id,
        name,
        rating,
        image,
        description,
        category,
      };
    });

    setMovies(moviesFormatted);
  };

  const handleFilterByCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const categoryId = Number(event.target.value);

    const isActive = categoriesIdAvailable.includes(categoryId);

    if (isActive) {
      setCategoriesIdAvailable((prevState) =>
        prevState.filter((currentId) => currentId !== categoryId)
      );
    } else {
      setCategoriesIdAvailable((prevState) => [...prevState, categoryId]);
    }
  };

  const handleFilterByTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value.toLowerCase());
  };

  const handleRedirectToMovieDetails = (id: number) => {
    history.push(`/${id}`);
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
        <SearchFilterWrapper>
          <InputTextFilter
            type="text"
            placeholder="Pesquisar filme..."
            onChange={handleFilterByTitle}
          />
          <Button
            backgroundColor={theme.colors.success}
            onClick={() => setShowModalMovie(true)}
          >
            ADICIONAR FILME
          </Button>
        </SearchFilterWrapper>
        <MovieList>
          {moviesFiltered.map((movie) => (
            <MovieItem key={movie.id}>
              <ImgMovie
                src="images/homem-aranha.png"
                alt={`Capa do filme ${movie.name}`}
              />
              <MovieWrapper>
                <MovieInfos>
                  <MovieTitle>{movie.name}</MovieTitle>
                  <MovieDescription>{movie.description}</MovieDescription>
                </MovieInfos>
                <MovieAction>
                  <MovieRating>
                    <StarsRating rating={movie.rating} />
                  </MovieRating>
                  <Button
                    backgroundColor={theme.colors.success}
                    onClick={() => handleRedirectToMovieDetails(movie.id)}
                  >
                    DETALHES
                  </Button>
                </MovieAction>
              </MovieWrapper>
            </MovieItem>
          ))}
        </MovieList>
      </ContentMoviesWrapper>
      {showModalMovie && (
        <ModalMovie
          show={showModalMovie}
          onClose={() => setShowModalMovie(false)}
          updateMovies={setMovies}
        />
      )}
    </Container>
  );
};

export default Home;
