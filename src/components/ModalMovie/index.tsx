import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { apimovies } from "../../services/api";
import { IMovie } from "../../views/Home";
import { Button } from "../Button";
import { Spinner } from "../Spinner";

import {
  AddIcon,
  Body,
  Container,
  FieldsetCasts,
  Footer,
  Header,
  InputGroup,
  InputText,
  InputTextarea,
  MessageError,
  Select,
  Title,
} from "./styles";

interface IModalMovieProps {
  show: boolean;
  onClose: () => void;
  updateMovies: Dispatch<React.SetStateAction<IMovie[]>>;
}

interface ICategory {
  id: number;
  name: string;
}

interface ICastInput {
  name: string;
  order: number;
}

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalMovie = ({ show, onClose, updateMovies }: IModalMovieProps) => {
  const theme = useTheme();

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [name, setName] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [director, setDirector] = useState("");
  const [category, setCategory] = useState<number>();
  const [castsInput, setCastsInput] = useState<ICastInput[]>([
    {
      name: "",
      order: 0,
    },
  ]);
  const [description, setDescription] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await apimovies.get("categories");

        if (response.data.length > 0) {
          setCategories(response.data);
          setCategory(response.data[0].id);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  const verifyFormIsValid = () => {
    const castsInputOk = castsInput.every(
      (cast) => !!cast.name && cast.order >= 0
    );

    if (
      !name ||
      !year ||
      !director ||
      !category ||
      category < 0 ||
      !castsInputOk ||
      !description
    ) {
      return false;
    }

    return true;
  };

  const handleAddMoreCast = () => {
    setCastsInput((prevState) => [
      ...prevState,
      {
        name: "",
        order: prevState.length,
      },
    ]);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYear(Number(event.target.value));
  };

  const handleDirectorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDirector(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(Number(event.target.value));
  };

  const handleCastChange = ({ name, order }: ICastInput) => {
    setCastsInput((prevState) =>
      prevState.map((cast) => {
        if (cast.order === order) {
          return {
            name,
            order,
          };
        }

        return cast;
      })
    );
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    setMessageError("");
    setLoadingSubmit(true);

    if (!verifyFormIsValid()) {
      setMessageError("Todos os campos do formulário são obrigatórios");
      setLoadingSubmit(false);
      return;
    }

    try {
      const categorySubmit = {
        id: category,
        name: categories.filter((categ) => categ.id === category)[0].name,
      };

      const dataMovie = {
        name,
        rating: 0,
        image: "images/homem-aranha.png",
        description,
        category: categorySubmit,
        cast: castsInput.map((cast) => cast.name),
        year,
        director,
      };

      const response = await apimovies.post("movies", dataMovie);

      updateMovies((prevState) => [...prevState, response.data]);

      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <Modal isOpen={show} onRequestClose={onClose} style={modalStyles}>
      <Container>
        <Header>
          <Title>Adicionar Filme</Title>
        </Header>
        <Body>
          <InputGroup>
            <InputText
              type="text"
              placeholder="Nome do Filme"
              value={name}
              onChange={handleNameChange}
            />
            <InputText
              type="number"
              placeholder="Ano do filme"
              value={year}
              onChange={handleYearChange}
            />
          </InputGroup>
          <InputGroup>
            <InputText
              type="text"
              placeholder="Diretor"
              value={director}
              onChange={handleDirectorChange}
            />
            <Select value={category} onChange={handleCategoryChange}>
              {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </Select>
          </InputGroup>
          <FieldsetCasts>
            <legend>
              Elenco
              <AddIcon onClick={() => handleAddMoreCast()} />
            </legend>
            <InputGroup>
              {castsInput.map((input) => (
                <InputText
                  key={`${input.order}-cast`}
                  type="text"
                  placeholder="Nome do(a) ator/atriz"
                  value={input.name}
                  onChange={(event) =>
                    handleCastChange({
                      name: event.target.value,
                      order: input.order,
                    })
                  }
                />
              ))}
            </InputGroup>
          </FieldsetCasts>
          <InputTextarea
            placeholder="Descrição do filme..."
            value={description}
            onChange={handleDescriptionChange}
          />
          <MessageError>{messageError}</MessageError>
        </Body>
        <Footer>
          <Button
            backgroundColor={theme.colors.success}
            onClick={() => handleSubmit()}
          >
            {loadingSubmit ? <Spinner /> : "Salvar"}
          </Button>
          <Button
            backgroundColor={theme.colors.failure}
            onClick={() => onClose()}
          >
            Cancelar
          </Button>
        </Footer>
      </Container>
    </Modal>
  );
};

export { ModalMovie };
