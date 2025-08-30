import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/Home/Hero";

// test suite

describe("Hero Components", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImg = screen.getByAltText("home-img");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "../assets/homeHero.png");
  });
});
