import React from "react";
import renderer from "react-test-renderer";

import Menubar from "../index";
describe("Menubar", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Menubar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
