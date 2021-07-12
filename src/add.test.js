// //add two integers
// //add decimals
// //add string
// //one number
// //string 'ten

import sum from './add.js';

test('Add 2 integers', () => {
    expect(sum(1,2)).toBe(3);
})

test('Add decimals', () => {
    expect(sum(1.2,1.3)).toBe(2.5);
})

test('Add negatives', () => {
    expect(sum(-1, -1)).toBe(-2);
})

test('Add strings', () => {
    expect(sum('1', '2')).toBe(3);
})

test('Add one number', () => {
    expect(sum(1)).toBe(1);
})

test('Add string ten', () => {
    expect(sum('ten', 1)).toBe(11);
})