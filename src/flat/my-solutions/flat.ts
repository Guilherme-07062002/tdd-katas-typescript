export function flat(...arrays: any[]): any[] {
  if (arrays.length === 0) throw new Error('param is empty')

  let result: any[] = []
  for (const array of arrays) {
    result = result.concat(array)
  }

  return result
}
