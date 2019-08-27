import React from "react";
import renderer from "react-test-renderer";

import Cell from "../index";
describe("Cell", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Cell />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
