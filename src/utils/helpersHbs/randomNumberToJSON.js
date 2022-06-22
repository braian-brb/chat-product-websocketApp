export const randomNumberToJSON = (object) => {
  const removeStartBracket = JSON.stringify(object).replaceAll('{', '')
  const removeEndBracket = removeStartBracket.replaceAll('}', '')
  const addSpaceToResult = removeEndBracket.replaceAll(':', ': ')
  return addSpaceToResult.replaceAll(',', '<br>')
}
