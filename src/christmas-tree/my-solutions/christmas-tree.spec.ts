import { describe, expect, it } from 'vitest'
import { christmasTree } from './christmas-tree'

describe('testing "christmas tree"', () => {
  it('should return a tree with 3 levels', () => {
    const actual = christmasTree(3)

    const expected = '  *  \n *** \n*****\n'

    expect(actual).toEqual(expected)
  })

  it('should return a tree with 4 levels', () => {
    const actual = christmasTree(4)

    const expected = '   *   \n  ***  \n ***** \n*******\n'

    expect(actual).toEqual(expected)
  })

  it('should return a tree with 5 levels', () => {
    const actual = christmasTree(5)

    const expected = '    *    \n   ***   \n  *****  \n ******* \n*********\n'

    expect(actual).toEqual(expected)
  })

  it('given 0 should return an empty string', () => {
    const actual = christmasTree(0)

    expect(actual).toEqual('')
  })
})
