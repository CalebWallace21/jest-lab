let functions = require (`./function`)

test(`test should run, and 2 should be returned`, () => {
    expect(functions.returnTwo()).toBe(2)
})
test(`should return James`, () => {
    expect(functions.greeting(`James`)).toBe(`Hello, James`)
})
test(`should return Hello, Jill`, () => {
    expect(functions.greeting(`Jill`)).toBe(`Hello, James`)
})
test(`should run function to add 1 and 2 to equal 3`, () => {
    expect(functions.add(1, 2)).toBe(3)
})
test(`should run function to add 5 and 9 to equal 14`, () => {
    expect(functions.add(5, 9)).toBe(14)
})
test(`multiply 4 and 2 and expect 8`, () => {
    expect(functions.multiply(4,2).toBe(8))
})

describe(`Math Functions`, () => {
    test(`Multiply`, () => {
        expect(functions.multiply(4,2).toBe(8))
    });

    test(`Divide`, () => {
        expect(functions.divide(4,2).toBe(2))
    });
    
    test(`Subtract`, () => {
        expect(functions.subtract(6,3).toBe(3))
    });
})