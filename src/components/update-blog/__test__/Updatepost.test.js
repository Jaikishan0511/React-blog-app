import React from "react";
import renderer from "react-test-renderer";

import Updatepost from "../index";
describe("Updatepost", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Updatepost />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
