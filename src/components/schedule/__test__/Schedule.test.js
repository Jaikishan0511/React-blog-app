import React from "react";
import renderer from "react-test-renderer";

import Schedule from "../index";
describe("Schedule", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Schedule />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
