import { h } from "preact";
import Header from "../src/components/header";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure

import { shallow, render, mount } from "enzyme";

describe("Test of the Header", () => {
  test("Header renders title and buttons", () => {
    const context = shallow(<Header />);
    expect(context.find("p").text()).toBe("BHS Inventory");
    expect(context.find("Link").length).toBe(3);
  });

    test("Header has correct 3 buttons", () => {
    const context = mount(<Header />);
      expect(context.find("Link").at(0).text()).toBe("Inventory");
      expect(context.find("Link").at(1).text()).toBe("Trends");
      expect(context.find("Link").at(2).text()).toBe("Sign In");
    });
});
