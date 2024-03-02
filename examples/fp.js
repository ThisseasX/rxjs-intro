import { pipe, add } from '../my-fp';

/**
 * FP Exercise
 *
 * You are given a string input, which is a number.
 *
 * You need to:
 * 1. Convert the string to a number
 * 2. Add 1 to the number
 * 3. Convert the number back to a string
 * 4. Log the string to the console
 */

/**
 * Pseudo Code
 *
 * Initial Value
 * -> number
 * -> +1
 * -> string
 */

const input = '9999';

pipe(
  Number, //
  add(1),
  String,
  console.log,
)(input);
