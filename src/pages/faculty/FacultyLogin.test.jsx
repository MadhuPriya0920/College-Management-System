import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import FacultyLogin from "./FacultyLogin";

describe("Faculty Login Module", () => {

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  test("displays Faculty Login page", () => {
    render(
      <MemoryRouter>
        <FacultyLogin />
      </MemoryRouter>
    );

    expect(screen.getByText("Faculty Login")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Employee ID")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  test("logs in faculty member using employee ID", () => {
    render(
      <MemoryRouter>
        <FacultyLogin />
      </MemoryRouter>
    );

    const employeeId = screen.getByPlaceholderText("Employee ID");
    const password = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(employeeId, {
      target: { value: "FAC101" }
    });

    fireEvent.change(password, {
      target: { value: "12345" }
    });

    fireEvent.click(loginButton);

    expect(localStorage.getItem("facultyId")).toBe("FAC101");
    expect(localStorage.getItem("facultyName")).toBe("Dr. Rajesh Kumar");
  });

});