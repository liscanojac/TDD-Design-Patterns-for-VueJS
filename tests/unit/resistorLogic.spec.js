import { resistorPrice, resistorCost } from "@/utils/logic";

describe("Resistor Cost logic", () => {

  test('makes the calculation correctly when amount < 50', () => {

    const amount = 25;

    expect(resistorCost(resistorPrice, amount)).toEqual(15);
  })

  test('makes the calculation correctly when amount > 50', () => {

    const amount = 75;

    expect(resistorCost(resistorPrice, amount)).toEqual(36);
  })
})