import React from "react";
import renderer from "react-test-renderer";

import Posts from "../index";
describe("Posts", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Posts />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
