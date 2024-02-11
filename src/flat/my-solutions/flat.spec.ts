import { describe, expect, it } from 'vitest'
import { flat } from './flat'

describe('testing "flat" function', () => {
  it('should receives n arrays and stitches them into a single array', () => {
    const given = [
      [1, 2],
      [4, 5],
      [7, 8]
    ]

    const actual = flat(given[0], given[1], given[2])

    expect(actual).toEqual([1, 2, 4, 5, 7, 8])
  })

  it('when give one array should return it', () => {
    const given = [1, 2, 3]

    const actual = flat(given)

    expect(actual).toEqual(given)
  })

  it('should throw an error when not pass any array', () => {
    expect(() => flat()).toThrow('param is empty')
  })

  it('should only ignore when pass an empty array', () => {
    const given = [[1, 2, 3], [], [4, 5, 6]]

    const actual = flat(given[0], given[1], given[2])

    expect(actual).toEqual([1, 2, 3, 4, 5, 6])
  })
})
