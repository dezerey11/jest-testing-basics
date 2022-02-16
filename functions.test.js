const functions = require("./functions");

//// when you want to run something before/after the test/s ////

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

const nameCheck = () => console.log("Checking Name...");

//// use "describe" to run certain groups of tests ////

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Pepper", () => {
    const user = "Pepper";
    expect(user).toBe("Pepper");
  });

  test("User is Eve", () => {
    const user = "Eve";
    expect(user).toBe("Eve");
  });
});

// run a test function
// add a description
// give it expect and put in what you are testing
// give it a match (in this case "toBe")
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// when you want it to NOT be something
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// TO CHECK TRUTHY AND FALSY VALUES
// toBeNull => matches only null
// toBeUndefined => matches only undefined
// toBeDefined => the opposite of toBeUndefined
// toBeTruthy => matches anything that an if statement treats as true
// tobeFalsey => matches anything that an if statement treats as false

// check if null
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//check if falsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// cannot use .toBe because objects/arrays are reference types, therefore use .toEqual
test("User should be Penny Lane object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Penny",
    lastName: "Lane",
  });
});

/// TEST GREATER, LESS, OR EQUAL ///
test("Should be under 1500", () => {
  const load1 = 500;
  const load2 = 900;
  expect(load1 + load2).toBeLessThan(1500);
});

test("Should be under 1500", () => {
  const load1 = 500;
  const load2 = 1000;
  expect(load1 + load2).toBeLessThanOrEqual(1500);
});

/// TEST REGEX ///
// test("There is not I in team", () => {
//   expect("teamI").not.toMatch(/I/i); //expect a fail with "i or "I"
// });

/// ARRAYS ///
test("Admin should be in usernames", () => {
  usernames = ["Roxy", "Bruce", "Louie", "admin"];
  expect(usernames).toContain("admin");
});

///// How to use with ASYNC DATA /////

/// PROMISE ///
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

/// ASYNC AWAIT ///
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
