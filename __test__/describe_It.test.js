beforeAll(() => {
  console.log('beforeAll')
})

afterAll(() => {
  console.log('afterAll')
})

beforeEach(() => {
  console.log('beforeEach')
})

afterEach(() => {
  console.log('afterEach')
})

describe('auth', () => {
  it('test1', () => {})
  it('test2', () => {})
})
describe('auth', () => {
  test('test1', () => {})
  test('test2', () => {})
})
