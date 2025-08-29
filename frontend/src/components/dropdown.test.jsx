import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../components/Dropdown";

describe("Dropdown component", () => {
  test("par défaut le contenu est caché", () => {
    render(<Dropdown title="Description" content="Texte caché" />);

    // Le contenu ne doit pas être visible au départ
    const content = screen.queryByText("Texte caché");
    expect(content).not.toBeVisible();
  });

  test("le contenu s'affiche après clic", () => {
    render(<Dropdown title="Description" content="Texte affiché" />);

    // Clique sur le header
    const header = screen.getByText("Description");
    fireEvent.click(header);

    // Le contenu doit être visible
    expect(screen.getByText("Texte affiché")).toBeVisible();
  });
});
