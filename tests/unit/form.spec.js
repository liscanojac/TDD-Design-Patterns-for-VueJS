import { required, isBetween, validateMeasurement, isFormValid, patientForm } from "@/utils/form";

const invalidReturn = {
  valid: false,
  message: 'Required'
}

const validReturn = { valid: true }

const minAndMax = {
  min: 5,
  max: 10
}

const constraints = {
  min: 10,
  max: 30
}


const minAndMaxConstraint = {
  nullable: false,
  constraints
}

const invalidIsBetween = (range) =>  ({
  valid: false,
  message: `Must be between ${range.min} and ${range.max}`
})

describe('required function', () => {

  test('returns invalid when undefined', () => {

    expect(required(undefined)).toEqual(invalidReturn)
  })

  test('returns invalid when empty string is passed', () => {

    expect(required('')).toEqual(invalidReturn);
  })

  test('returns true when a string is passed', () => {

    expect(required('test')).toEqual(validReturn)
  })
})

describe('isBetween function', () => {

  test('returns true when value is between min and max', () => {

    expect(isBetween(7, minAndMax)).toEqual(validReturn)
  })

  test('returns true when value is equal to min', () => {

    expect(isBetween(minAndMax.min, minAndMax)).toEqual(validReturn)
  })

  test('returns true when value is equal to max', () => {

    expect(isBetween(minAndMax.max, minAndMax)).toEqual(validReturn)
  })

  test('returns invalid when value is smaller than min', () => {

    const smallerValueThanMin = minAndMax.min - 2

    expect(isBetween(smallerValueThanMin, minAndMax)).toEqual(invalidIsBetween(minAndMax))
  })

  test('returns invalid when value is greater than max', () => {

    const greaterValueThanMin = minAndMax.max + 3

    expect(isBetween(greaterValueThanMin, minAndMax)).toEqual(invalidIsBetween(minAndMax))
  })
})

describe('validateMeasurement function', () => {

  test('returns invalidReturn when falsey input', () => {
    
    expect(validateMeasurement(undefined, minAndMaxConstraint)).toEqual(invalidReturn)
  })

  test('returns invalidIsBetween when value is outside range', () => {

    expect(validateMeasurement(40, minAndMaxConstraint)).toEqual(invalidIsBetween(constraints))
  })
})

describe('isFormValid function', () => {

  test('returns true when name and weight are valid', () => {

    expect(isFormValid({
      name: {
        valid: true
      },
      weight: {
        valid: true
      }
    })).toEqual(true)
  })

  test('returns false when name is not valid', () => {

    expect(isFormValid({
      name: {
        valid: false
      },
      weight: {
        valid: true
      }
    })).toEqual(false)
  })

  test('returns false when weight is not valid', () => {

    expect(isFormValid({
      name: {
        valid: true
      },
      weight: {
        valid: false
      }
    })).toEqual(false)
  })
})

describe('patientForm function', () => {

  const validPatient = {
    name: 'testPatient',
    weight: {
      value: 100,
      units: 'kg'
    }
  }

  const limits = {
    kg: {
      min: 30,
      max: 200
    },
    lb: {
      min: 66,
      max: 440
    }
  }

  test('returns valid when its filled out correctly', () => {

    const form = patientForm(validPatient);

    expect(form.name).toEqual(validReturn)
    expect(form.weight).toEqual(validReturn)
  })

  test('returns invalid when name is a falsey', () => {

    const form = patientForm({
      ...validPatient,
      name: ''
    })

    expect(form.name).toEqual(invalidReturn)
  })

  test(' returns invalid weight with an incorrect weight in imperial is passed', () => {

    const form = patientForm({
      ...validPatient,
      weight: {
        value: 65,
        units: 'lb'
      }
    })

    expect(form.weight).toEqual(invalidIsBetween(limits.lb))
  })
  
  test(' returns invalid weight with an incorrect weight in metric is passed', () => {

    const form = patientForm({
      ...validPatient,
      weight: {
        value: 201,
        units: 'kg'
      }
    })

    expect(form.weight).toEqual(invalidIsBetween(limits.kg))
  })
  
})