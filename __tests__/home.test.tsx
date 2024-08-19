import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/app/page";
import { getCuratedPhotos } from "../src/lib/pexels";

jest.mock("../src/lib/pexels");

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Unleash the power of/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("getCuratedPhotos", () => {
  it("fetches curated photos successfully", async () => {
    const mockPhotos = [{ id: 1, url: "https://example.com/photo1.jpg" }];
    (getCuratedPhotos as jest.Mock).mockResolvedValue(mockPhotos);

    const result = await getCuratedPhotos(1);

    expect(result).toEqual(mockPhotos);
    expect(getCuratedPhotos).toHaveBeenCalledWith(1);
  });

  it("returns an empty array on error", async () => {
    (getCuratedPhotos as jest.Mock).mockRejectedValue(new Error("API error"));

    const result = await getCuratedPhotos(1);

    expect(result).toEqual([]);
  });
});
