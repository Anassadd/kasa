import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  it("affiche le titre s’il est fourni", () => {
    render(<Banner image="/test.jpg" title="Texte bannière" />);
    expect(screen.getByText("Texte bannière")).toBeInTheDocument();
  });

  it("n’affiche pas de titre si non fourni", () => {
    render(<Banner image="/test.jpg" />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("applique bien l’image de fond", () => {
    render(<Banner image="/mon-image.jpg" title="Texte test" />);
    const banner = screen.getByText("Texte test").parentElement;
    expect(banner).toHaveStyle(`background-image: url(/mon-image.jpg)`);
  });
});
