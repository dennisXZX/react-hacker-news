import { numberWithCommas } from '../../utils/stringFormatter'

describe('stringFormatter', () => {
  test('should add one comma to number with more than 3 digits', () => {
    const expectedResult = '111,111'
    const actualResult = numberWithCommas(111111)
    expect(actualResult).toBe(expectedResult)
  })

  test('should add two commas to number with more than 6 digits', () => {
    const expectedResult = '1,111,111'
    const actualResult = numberWithCommas(1111111)
    expect(actualResult).toBe(expectedResult)
  })

  test('should NOT add comma to number with less than or equal to 3 digits', () => {
    const expectedResult = '111'
    const actualResult = numberWithCommas(111)
    expect(actualResult).toBe(expectedResult)
  })
})
