const Engineer = require('../lib/Engineer');

test("Is this an object", () => {
  const obj = new Engineer()
  expect(typeof(obj)).toBe("object")
})

test('can get github through function', () => {
  const github = "test"
  const obj = new Engineer("name", "id", "email", github)
  expect(obj.getGithub()).toBe(github)
})

test('can get role through function', () => {
  const role = "Engineer"
  const obj = new Engineer("name", "id", "email", "github")
  expect(obj.getRole()).toBe(role)
})