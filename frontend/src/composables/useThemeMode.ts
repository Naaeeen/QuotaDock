import { onMounted, onUnmounted, ref } from 'vue'

const isDark = ref(
  typeof document !== 'undefined'
    ? document.documentElement.classList.contains('dark')
    : false
)
let observer: MutationObserver | null = null
let listenerCount = 0

function syncThemeState() {
  if (typeof document === 'undefined') return
  isDark.value = document.documentElement.classList.contains('dark')
}

function startThemeObserver() {
  if (typeof document === 'undefined' || observer) return
  observer = new MutationObserver(syncThemeState)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
}

function stopThemeObserver() {
  if (listenerCount > 0 || !observer) return
  observer.disconnect()
  observer = null
}

function setDarkMode(value: boolean) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem('theme', value ? 'dark' : 'light')
  isDark.value = value
}

function toggleThemeMode() {
  setDarkMode(!isDark.value)
}

export function useThemeMode() {
  onMounted(() => {
    listenerCount += 1
    syncThemeState()
    startThemeObserver()
  })

  onUnmounted(() => {
    listenerCount = Math.max(0, listenerCount - 1)
    stopThemeObserver()
  })

  return {
    isDark,
    setDarkMode,
    toggleThemeMode,
    syncThemeState
  }
}
