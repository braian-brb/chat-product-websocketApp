export const randomNumberToJSON = (object) => {
  const removeBrackets = JSON.stringify(object).replace(/[{}]/gi, '')
  const addSpaceToResult = removeBrackets.replaceAll(':', ': ')
  return addSpaceToResult.replaceAll(',', '<br>')
}
