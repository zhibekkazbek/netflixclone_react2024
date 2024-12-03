import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

test("renders HomePage and displays movies", () => {
    render(<HomePage />);
    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("Interstellar")).toBeInTheDocument();
});
