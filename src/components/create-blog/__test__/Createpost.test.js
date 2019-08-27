import React from "react";
import renderer from "react-test-renderer";

import Createpost from "../index";
describe("Createpost", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Createpost />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
