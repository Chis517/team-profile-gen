const Intern = require('../lib/Intern');

test("Is this an object", () => {
  const obj = new Intern()
  expect(typeof(obj)).toBe("object")
})

test('can get school through function', () => {
  const school = "test"
  const obj = new Intern("name", "id", "email", school)
  expect(obj.getSchool()).toBe(school)
})

test('can get role through function', () => {
  const role = "Intern"
  const obj = new Intern("name", "id", "email", "school")
  expect(obj.getRole()).toBe(role)
})