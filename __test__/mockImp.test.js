test('mockImplementation', () => {
  const mockFn = jest
    .fn(() => 'default')
    .mockImplementation(() => 'First Call')
    .mockImplementation(() => 'second call')

  const res1 = mockFn()
  const res2 = mockFn()

  console.log(res1)
  console.log(res2)
})

test('mockImplementationOnce', () => {
  const mockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'First Call')
  // .mockImplementation(() => 'second call')

  const res1 = mockFn()
  const res2 = mockFn()

  console.log(res1)
  console.log(res2)
})
