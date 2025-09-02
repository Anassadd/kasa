import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  it("affiche le titre du dropdown", () => {
    render(<Dropdown title="Mon titre" content="Mon contenu" />);
    expect(screen.getByText("Mon titre")).toBeInTheDocument();
  });

  it("ouvre et ferme le contenu quand on clique", () => {
    render(<Dropdown title="Titre" content="Texte du dropdown" />);

    // On cible directement la div du contenu
    const contentDiv = screen.getByText("Texte du dropdown").closest(".dropdown-content");

    // Au départ → fermé
    expect(contentDiv).toHaveClass("closed");

    // Clique → ouverture
    fireEvent.click(screen.getByText("Titre"));
    expect(contentDiv).not.toHaveClass("closed");

    // Clique encore → fermeture
    fireEvent.click(screen.getByText("Titre"));
    expect(contentDiv).toHaveClass("closed");
  });
});
