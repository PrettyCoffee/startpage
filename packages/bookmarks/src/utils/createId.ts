const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-"
const valueCount = chars.length

const getRandomChar = () => {
  const randomInt = (Math.random() * (valueCount - 1)) | 0
  return chars[randomInt]
}

export const createId = () => {
  let id = "",
    size = 16
  while (size--) id += getRandomChar()
  return id
}
