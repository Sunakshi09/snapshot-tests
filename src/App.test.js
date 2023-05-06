import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

test("renders a snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders text frozen link", () => {
  render(<App />);
  screen.debug();
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
