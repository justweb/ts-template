import { App } from "./App";

describe("App", () => {
  it("works", () => {
    const a = new App();

    expect(a.run()).toEqual("works");
  });
});
