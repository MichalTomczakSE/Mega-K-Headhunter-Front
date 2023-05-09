import { render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

import { LinkComponent } from "@/components/hrInfo/linkHr/linkComponent";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("LinkComponent", () => {
  let mockPush: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    const mockUseRouter = jest.fn(() => ({ push: mockPush, asPath: "" }));
    (useRouter as jest.Mock).mockImplementation(mockUseRouter);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("clicking a button calls router.push() with the /dashboard/hr/toTalk path", () => {
    const { getByText } = render(<LinkComponent />);
    const button = getByText("Do rozmowy");
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/dashboard/hr/toTalk");
  });

  it("clicking a button  calls router.push with the /dashboard/hr/availableStudents path", () => {
    const { getByText } = render(<LinkComponent />);
    const button = getByText("Dostępni kursanci");
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/dashboard/hr/availableStudents");
  });
});
