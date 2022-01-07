export const createId = () => {
  const now = Date.now()
  const random = Math.random() * 10000
  const num = now * random

  return btoa(num.toString())
}
