import { beforeEach, describe, expect, it, vi } from 'vitest'
import { forEach } from './for-each'

const makeSut = () => {
  const mockCallback = vi.fn().mockImplementation((value: unknown) => console.log(value))

  return { mockCallback }
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe('testing "forEach" function', () => {
  it('given a list of values it should execute a given callback with the element its iterating over.', () => {
    const { mockCallback } = makeSut()

    const given = [1, 2, 3, 4]

    forEach<number>(given, mockCallback)

    expect(mockCallback).toHaveBeenCalledTimes(4)
  })

  it('given a empty list of values it should not execute the callback.', () => {
    const { mockCallback } = makeSut()

    const given: number[] = []

    forEach<number>(given, mockCallback)

    expect(mockCallback).not.toHaveBeenCalled()
  })
})
