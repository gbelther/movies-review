/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { StarsRating } from ".";
import { theme } from "../../global/styles/theme";

describe("<StarsRating />", () => {
  it("should render correctly with rating equals 3", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={3} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(2);
    expect(starsFillQuantity).toBe(3);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating equals 5", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={5} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(0);
    expect(starsFillQuantity).toBe(5);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating equals 1", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={1} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(4);
    expect(starsFillQuantity).toBe(1);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating equals 0", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={0} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(4);
    expect(starsFillQuantity).toBe(1);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating negative", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={-1} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(4);
    expect(starsFillQuantity).toBe(1);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating higher than stars quantity", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={6} starsQuantity={5} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(0);
    expect(starsFillQuantity).toBe(5);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with starsQuantity equals 10", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={8} starsQuantity={10} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(2);
    expect(starsFillQuantity).toBe(8);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(10);
  });

  it("should render correctly with starsQuantity negative", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={8} starsQuantity={-2} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(0);
    expect(starsFillQuantity).toBe(1);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(1);
  });
});
