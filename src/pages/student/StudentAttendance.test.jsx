import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

import StudentAttendance from "./StudentAttendance";

describe("Student Attendance Module", () => {

  afterEach(() => {
    cleanup();
  });

  test("displays Attendance page", () => {
    render(
      <MemoryRouter>
        <StudentAttendance />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Attendance" })
    ).toBeInTheDocument();

    expect(screen.getByText("Course")).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: "Attendance" })
    ).toBeInTheDocument();
  });

  test("displays all course attendance records", () => {
    render(
      <MemoryRouter>
        <StudentAttendance />
      </MemoryRouter>
    );

    expect(screen.getByText("Software Engineering")).toBeInTheDocument();
    expect(screen.getByText("92%")).toBeInTheDocument();

    expect(screen.getByText("Cloud Computing")).toBeInTheDocument();
    expect(screen.getByText("95%")).toBeInTheDocument();

    expect(screen.getByText("DevOps")).toBeInTheDocument();
    expect(screen.getByText("88%")).toBeInTheDocument();

    expect(screen.getByText("DBMS")).toBeInTheDocument();
    expect(
      screen.getAllByText("90%")
    ).toHaveLength(2);

    expect(
      screen.getByText("Agile Development Process")
    ).toBeInTheDocument();
  });

});