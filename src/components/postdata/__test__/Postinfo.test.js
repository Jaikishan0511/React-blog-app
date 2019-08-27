import React from "react";
import renderer from "react-test-renderer";

import Postinfo from "../index";
describe("Postinfo", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Postinfo />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
