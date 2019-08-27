import React from "react";
import renderer from "react-test-renderer";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// test file
import { shallow, mount, render } from "enzyme";

import Numbergrid from "../index";
describe("Numbergrid", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Numbergrid />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
