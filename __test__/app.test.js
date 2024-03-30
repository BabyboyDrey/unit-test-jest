const { getData } = require('../app')
const crypto = require('crypto')

//jest.mock('crypto')

test('fetch data', async () => {
  // crypto.randomBytes.mockResolvedValueOnce('bytes')
  //crypto.randomBytes.mockImplementationOnce(() => Promise.resolve('bytes'))

  jest.spyOn(crypto, 'randomBytes').mockResolvedValueOnce('bytes')

  const res = await getData()
  console.log(res)
  expect(res).toBe('bytes')
})
