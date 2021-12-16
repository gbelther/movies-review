/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { StarsRating } from ".";
import { theme } from "../../global/styles/theme";

describe("<StarsRating />", () => {
  it("should render correctly rating", () => {
    render(
      <ThemeProvider theme={theme}>
        <StarsRating rating={3} />
      </ThemeProvider>
    );

    const starsEmptyQuantity = screen.getAllByTitle("star-empty").length;
    const starsFillQuantity = screen.getAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(2);
    expect(starsFillQuantity).toBe(3);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });
});
