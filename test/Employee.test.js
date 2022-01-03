const Employee = require('../lib/Employee');

test("Is this an object", () => {
  const obj = new Employee()
  expect(typeof (obj)).toBe("object")
})

test("Can set name", () => {
  const name = 'Christian'
  const obj = new Employee(name)
  expect(obj.name).toBe(name)
})

test("Can set id", () => {
  const id = '1'
  const obj = new Employee("name", id)
  expect(obj.id).toBe(id)
})

test("Can set email", () => {
  const email = 'test@test.com'
  const obj = new Employee("name", "id", email)
  expect(obj.email).toBe(email)
})

test('can get name through function', () => {
  const name = "Christian"
  const obj = new Employee(name)
  expect(obj.getName()).toBe(name)
})

test('can get id through function', () => {
  const id = "1"
  const obj = new Employee("name", id)
  expect(obj.getId()).toBe(id)
})

test('can get email through function', () => {
  const email = "test@test.com"
  const obj = new Employee("name", "id", email)
  expect(obj.getEmail()).toBe(email)
})

test('can get role through function', () => {
  const role = "Employee"
  const obj = new Employee("name", "id", "email")
  expect(obj.getRole()).toBe(role)
})