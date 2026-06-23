import { computed, unref, type Ref } from 'vue'
import { useAppStore } from '@/stores'
import { useThemeMode } from '@/composables/useThemeMode'
import i18n from '@/i18n'
import { sanitizeUrl } from '@/utils/url'
import type { PublicSettings } from '@/types'

export type BrandLogoVariant = 'icon' | 'compact' | 'hero' | 'divider'
export type BrandLogoLanguage = 'auto' | 'en' | 'zh' | 'bilingual'

type MaybeRef<T> = T | Ref<T>

interface UseBrandingOptions {
  variant?: MaybeRef<BrandLogoVariant>
  language?: MaybeRef<BrandLogoLanguage>
  preferCustom?: MaybeRef<boolean>
  settings?: MaybeRef<Partial<PublicSettings> | null | undefined>
}

function resolveAsset(lightSrc: string, darkSrc: string, isDark: boolean): string {
  return isDark ? darkSrc : lightSrc
}

export function useBranding(options: UseBrandingOptions = {}) {
  const appStore = useAppStore()
  const { isDark } = useThemeMode()

  const variant = computed<BrandLogoVariant>(() => unref(options.variant) ?? 'compact')
  const requestedLanguage = computed<BrandLogoLanguage>(() => unref(options.language) ?? 'auto')
  const preferCustom = computed(() => unref(options.preferCustom) ?? false)
  const settings = computed(() => unref(options.settings) ?? appStore.cachedPublicSettings ?? null)
  const currentLocale = computed(() => i18n.global.locale.value === 'zh' ? 'zh' : 'en')

  const siteName = computed(() => settings.value?.site_name || appStore.siteName || 'QuotaDock')
  const customLogo = computed(() =>
    sanitizeUrl(settings.value?.site_logo || appStore.siteLogo || '', {
      allowRelative: true,
      allowDataUrl: true
    })
  )

  const logoLanguage = computed<Exclude<BrandLogoLanguage, 'auto'>>(() => {
    if (requestedLanguage.value !== 'auto') return requestedLanguage.value
    return currentLocale.value === 'zh' ? 'zh' : 'en'
  })

  const brandText = computed(() => {
    if (logoLanguage.value === 'zh') return '额渡'
    if (logoLanguage.value === 'bilingual') return 'QuotaDock 额渡'
    return 'QuotaDock'
  })

  const logoAlt = computed(() => {
    if (preferCustom.value && customLogo.value && variant.value === 'icon') {
      return siteName.value
    }
    return brandText.value
  })

  const logoSrc = computed(() => {
    if (preferCustom.value && customLogo.value && variant.value === 'icon') {
      return customLogo.value
    }

    if (variant.value === 'icon') {
      return resolveAsset('/logo.svg', '/logo-on-dark.svg', isDark.value)
    }

    if (variant.value === 'divider') {
      return resolveAsset('/logo-lockup-divider-light.svg', '/logo-lockup-divider.svg', isDark.value)
    }

    if (variant.value === 'hero') {
      if (logoLanguage.value === 'en') {
        return resolveAsset('/logo-lockup-hero-en-light.svg', '/logo-lockup-hero-en.svg', isDark.value)
      }
      return resolveAsset('/logo-lockup-hero-zh-light.svg', '/logo-lockup-hero-zh.svg', isDark.value)
    }

    if (logoLanguage.value === 'zh') {
      return resolveAsset('/logo-lockup-zh-light.svg', '/logo-lockup-zh.svg', isDark.value)
    }

    if (logoLanguage.value === 'en') {
      return resolveAsset('/logo-lockup-en-light.svg', '/logo-lockup-en.svg', isDark.value)
    }

    return resolveAsset('/logo-lockup-light.svg', '/logo-lockup.svg', isDark.value)
  })

  const faviconSrc = computed(() => (preferCustom.value && customLogo.value ? customLogo.value : '/logo.svg'))

  return {
    brandText,
    customLogo,
    faviconSrc,
    isDark,
    logoAlt,
    logoLanguage,
    logoSrc,
    siteName
  }
}
