import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import App from "./App";

test("renders app", () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/MY PROJECTS/i);
  expect(linkElement).toBeInTheDocument();
});
