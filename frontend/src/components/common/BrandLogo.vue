<template>
  <img :src="logoSrc" :alt="resolvedAlt" decoding="async" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBranding, type BrandLogoLanguage, type BrandLogoVariant } from '@/composables/useBranding'
import type { PublicSettings } from '@/types'

const props = withDefaults(defineProps<{
  alt?: string
  language?: BrandLogoLanguage
  preferCustom?: boolean
  settings?: Partial<PublicSettings> | null
  variant?: BrandLogoVariant
}>(), {
  alt: '',
  language: 'auto',
  preferCustom: false,
  settings: null,
  variant: 'compact'
})

const variantRef = computed(() => props.variant)
const languageRef = computed(() => props.language)
const preferCustomRef = computed(() => props.preferCustom)
const settingsRef = computed(() => props.settings)

const { logoAlt, logoSrc } = useBranding({
  language: languageRef,
  preferCustom: preferCustomRef,
  settings: settingsRef,
  variant: variantRef
})

const resolvedAlt = computed(() => props.alt || logoAlt.value)
</script>
