<template>
  <div class="inline-flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path :d="icons()"></path>
    </svg>
  </div>
</template>

<script>
import { icons, number, text } from '@/helpers'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '24',
    },
    height: {
      type: String,
      default: '24',
    },
  },
  methods: {
    icons() {
      return icons[text.kebabToCamel(this.name.trim().toLowerCase())] || icons.home
    },
    getWidth() {
      return number.toNumber(this.width)
    },
    getHeight() {
      return number.toNumber(this.height)
    },
  },
}
</script>
