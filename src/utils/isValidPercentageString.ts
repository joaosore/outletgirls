function isValidPercentageString(input) {
  // Check if the input ends with a '%' and split it from the number part
  if (typeof input === 'string' && input.endsWith('%')) {
    let numberPart = input.slice(0, -1); // Remove the '%' sign

    // Convert the number part to a number and check the range
    let number = Number(numberPart);
    return Number.isFinite(number) && number >= 0 && number <= 100;
  }
  return false; // Return false if no '%' at the end or other input issues
}

export { isValidPercentageString };
