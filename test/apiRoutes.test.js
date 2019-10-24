// require("./dbInit");
// const apiRoutes = require("../routes/apiRoutes");

// describe("API - ROUTES", () => {
//   let req = {};
//   let res = {};
//   beforeEach(() => {
//     req = {};
//     res = {};
//   });
//   it("should add an example", async () => {
//     req = {
//       body: {
//         text: "text",
//         description: "description"
//       }
//     };

//     res = {
//       json: jest.fn()
//     };

//     await apiRoutes.postExampleApi(req, res);
//     expect(res.json.mock.calls[0][0].text).toBe(req.body.text);
//     expect(res.json.mock.calls[0][0].description).toBe(req.body.description);
//   });
// });

describe("canary test2", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(true).toBe(true);
  });
});
