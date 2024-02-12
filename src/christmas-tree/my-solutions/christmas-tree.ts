export function christmasTree(rows: number) {
  if (rows === 0) return ''
  let tree = ''

  for (let i = 1; i <= rows; i++) {
    const spaces = ' '.repeat(rows - i)
    const stars = '*'.repeat(2 * i - 1)
    tree += `${spaces}${stars}${spaces}\n`
  }

  return tree
}
