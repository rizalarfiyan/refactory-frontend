<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = 'Default'
export default {
  name: 'LayoutsEngine',
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout
      return () => import(`@/layouts/${layout}Layout.vue`)
    },
  },
}
</script>
