import { describe, expect, it } from 'vitest'
import { wordWrap } from './word-wrap'

describe("testing 'word wrap'", () => {
  it('should break the text into multiple lines', () => {
    const given = 'abc'

    const result = wordWrap(given, 1)

    expect(result).toEqual('a\nb\nc')
  })

  it('should return the correct wrapped text', () => {
    const actual = wordWrap('One two three four five six', 10)

    const expected = 'One two th\nree four f\nive six'

    expect(actual).toEqual(expected)
  })
})
