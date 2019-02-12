import React from "react";
import LandingPage from "../landing-page";
import { cleanup, fireEvent } from "react-testing-library";
import { render, sleep } from "client/../../test/utils";

afterEach(cleanup);

jest.mock("../../services/firebase-service", () => {
  return {
    getUserFromFirebase: () => null,
  };
});
test("that it renders without issues", () => {
  render(<LandingPage />);
});

test("that when you click login, it renders the login modal, then clicking cancel closes it", async () => {
  const { getByTestId, queryByTestId } = render(<LandingPage />);

  fireEvent.click(getByTestId("open-login-modal"));
  await sleep(0);
  expect(getByTestId("login-modal")).toBeInTheDocument();

  fireEvent.click(getByTestId("left-modal-button"));

  await sleep(0);

  expect(queryByTestId("login-modal")).toBeNull();
});
