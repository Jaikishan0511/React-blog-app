import React from "react";
import renderer from "react-test-renderer";

import Page from "./index";
describe("Page", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Page />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
