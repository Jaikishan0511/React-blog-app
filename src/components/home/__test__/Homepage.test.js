import React from "react";
import renderer from "react-test-renderer";

import Homepage from "../index";
describe("homepage", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Homepage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
