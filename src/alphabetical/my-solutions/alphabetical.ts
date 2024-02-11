export function alphabetical(list: string[]): string[] {
  if (list.length === 0) throw new Error('array is empty')

  list.map(item => {
    const containNumber = /\d/.test(item)
    if (containNumber) throw new Error('array contains non-string elements')

    const containEspecialCharacters = /[^a-zA-Z]/.test(item)
    if (containEspecialCharacters) throw new Error('array contains especial characters')
  })

  return list.sort()
}
