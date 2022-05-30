import { submitValidator } from "@/utils/validators";

describe('Submit Validator', () => {

  test('throws an error when count is a string', () => {

    expect(() => submitValidator('2')).toThrowError()
  })

  test('throws an error when count is NaN', () => {

    expect(() => submitValidator(NaN)).toThrowError()
  })

  test('throws an error when count is NaN', () => {

    expect(() => submitValidator(NaN)).toThrowError()
  })

  test('returns true when a number is passed', () => {

    expect(submitValidator(2)).toEqual(true)
  })
})