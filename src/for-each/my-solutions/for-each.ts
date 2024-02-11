export function forEach<T>(values: T[], callback: (element: T) => void) {
  for (const value of values) {
    callback(value)
  }
}
