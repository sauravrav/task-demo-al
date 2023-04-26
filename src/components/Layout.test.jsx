import { render, fireEvent } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Layout><div>Child component</div></Layout>);
    expect(getByText("Child component")).toBeInTheDocument();
  });

  it("toggles the navbar when the button is clicked", () => {
    const { getByLabelText, getByRole } = render(<Layout />);
    const button = getByLabelText("Open Menu");
    const navbar = getByRole("navigation", { hidden: true });

    expect(navbar).not.toHaveClass("active");

    fireEvent.click(button);

    expect(navbar).toHaveClass("active");

    fireEvent.click(button);

    expect(navbar).not.toHaveClass("active");
  });
});
