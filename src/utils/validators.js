function submitValidator(count) {
  if (typeof count !== 'number' || isNaN(count)) {
    throw Error(`
      Count should be a number.
      Got: ${count}
    `)
  }
  return true;
}

export {
  submitValidator
}