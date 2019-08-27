import React from "react";
import renderer from "react-test-renderer";

import Row from "../index";
describe("Row", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Row />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
