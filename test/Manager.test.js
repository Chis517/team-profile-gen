const Manager = require('../lib/Manager');

test("Is this an object", () => {
  const obj = new Manager()
  expect(typeof(obj)).toBe("object")
})

test('can get officeNum through function', () => {
  const officeNum = "1"
  const obj = new Manager("name", "id", "email", officeNum)
  expect(obj.getOfficeNum()).toBe(officeNum)
})

test('can get role through function', () => {
  const role = "Manager"
  const obj = new Manager("name", "id", "email", "officeNum")
  expect(obj.getRole()).toBe(role)
})