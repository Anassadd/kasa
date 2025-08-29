import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../components/Card";

describe("Card component", () => {
  test("affiche le titre du logement", () => {
    render(
      <MemoryRouter>
        <Card id="1" title="Super Appartement" cover="image.jpg" />
      </MemoryRouter>
    );

    // Vérifie si le titre est affiché
    expect(screen.getByText("Super Appartement")).toBeInTheDocument();
  });

  test("le lien redirige bien vers la page logement", () => {
    render(
      <MemoryRouter>
        <Card id="123" title="Appartement Test" cover="image.jpg" />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/logement/123");
  });
});
