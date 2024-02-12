import { describe, expect, it } from 'vitest'
import { caesar } from './caesar'

describe('testing "caesar"', () => {
  it('should shift by one position', () => {
    const given = 'abc'

    const actual = caesar(given, 1)

    expect(actual).toBe('bdf')
  })

  it('should shift by two positions initially', () => {
    const given = 'abc'

    const actual = caesar(given, 2)

    expect(actual).toBe('ceg')
  })

  it('should handle overflow of the alphabet', () => {
    const given = 'xyz'

    const actual = caesar(given, 1)

    expect(actual).toBe('yac')
  })
})
