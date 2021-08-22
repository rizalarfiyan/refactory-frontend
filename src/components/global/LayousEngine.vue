<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import { text } from '@/helpers'

const defaultLayout = 'default'
export default {
  name: 'LayoutsEngine',
  computed: {
    layout() {
      const layout = text.firstUpper(this.$route.meta.layout || defaultLayout)
      return () => import(`@/layouts/${layout}Layout.vue`)
    },
  },
}
</script>
