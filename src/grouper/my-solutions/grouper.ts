type Person = {
  name: string
  age: number
}

type GroupedPersons = Record<number, Person[]>

export function grouper(persons: Person[]): GroupedPersons {
  if (persons.length === 0) throw new Error('empty array')

  return persons.reduce<GroupedPersons>((previousValue, currentValue) => {
    const { age } = currentValue
    if (previousValue[age]) {
      previousValue[age].push(currentValue)
    } else {
      previousValue[age] = [currentValue]
    }
    return previousValue
  }, {})
}
