import { screen } from "@testing-library/react";

import { StarsRating } from ".";
import { renderTheme } from "../../util/renderTheme";

describe("<StarsRating />", () => {
  it("should render correctly with rating equals 3", () => {
    renderTheme(<StarsRating rating={3} />);

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(2);
    expect(starsFillQuantity).toBe(3);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating equals 5", () => {
    renderTheme(<StarsRating rating={5} />);

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(0);
    expect(starsFillQuantity).toBe(5);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating equals 1", () => {
    renderTheme(<StarsRating rating={1} />);

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(4);
    expect(starsFillQuantity).toBe(1);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating equals 0", () => {
    renderTheme(<StarsRating rating={0} />);

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(4);
    expect(starsFillQuantity).toBe(1);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating negative", () => {
    renderTheme(<StarsRating rating={-1} />);

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(4);
    expect(starsFillQuantity).toBe(1);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with rating higher than stars quantity", () => {
    renderTheme(<StarsRating rating={6} starsQuantity={5} />);

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(0);
    expect(starsFillQuantity).toBe(5);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(5);
  });

  it("should render correctly with starsQuantity equals 10", () => {
    renderTheme(<StarsRating rating={8} starsQuantity={10} />);

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(2);
    expect(starsFillQuantity).toBe(8);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(10);
  });

  it("should render correctly with starsQuantity negative", () => {
    renderTheme(<StarsRating rating={8} starsQuantity={-2} />);

    const starsEmptyQuantity = screen.queryAllByTitle("star-empty").length;
    const starsFillQuantity = screen.queryAllByTitle("star-fill").length;

    expect(starsEmptyQuantity).toBe(0);
    expect(starsFillQuantity).toBe(1);
    expect(starsEmptyQuantity + starsFillQuantity).toBe(1);
  });
});
