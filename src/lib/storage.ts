export const saveToLocalstorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getToLocalstorage = (key: string) => {
  return localStorage.getItem(key)
}

export const clearStorage = () => {
  localStorage.clear()
}
