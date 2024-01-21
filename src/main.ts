type keysTheme = 'light' | 'dark'
type themesContract = {
  DARK: 'dark'
  LIGHT: 'light'
}

const $btnToggleTheme = document.querySelector('#toggleTheme')
const systemSettingsTheme = window.matchMedia('(prefers-color-scheme: dark)')
const systemDarkTheme = systemSettingsTheme.matches
const themes: themesContract = {
  DARK: 'dark',
  LIGHT: 'light',
}

const saveTheme = (theme: keysTheme) => localStorage.setItem('theme', theme)
const getTheme = () => localStorage.getItem('theme')

const setDarkTheme = () => {
  const $document = document.documentElement
  const containsDarkTheme = $document.classList.contains(themes.DARK)
  if (containsDarkTheme) {
    return $document.classList.remove(themes.DARK)
  }

  document.documentElement.classList.add(themes.DARK)
}

const defaultTheme = () => {
  const savedPreference = getTheme()
  if (Boolean(savedPreference) && savedPreference === themes.LIGHT) {
    document.documentElement.classList.remove(themes.DARK)
    return null
  }

  const userPreference = systemDarkTheme ? themes.DARK : themes.LIGHT
  setDarkTheme()
  saveTheme(userPreference)
}

const changeTheme = () => {
  const hasSaveDarkTheme = getTheme() === themes.DARK
  const notSavedTheme = !('theme' in localStorage)
  const isDarkTheme = (hasSaveDarkTheme || (notSavedTheme && systemDarkTheme))
  const theme = isDarkTheme ? themes.LIGHT : themes.DARK

  saveTheme(theme)
  setDarkTheme()
}

if ($btnToggleTheme instanceof HTMLLabelElement) {
  $btnToggleTheme?.addEventListener('click', () => {
    changeTheme()
  })
}

systemSettingsTheme.addEventListener('change', () => {
  defaultTheme()
})

defaultTheme()

