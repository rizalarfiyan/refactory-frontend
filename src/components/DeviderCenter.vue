<template>
  <div class="flex items-center">
    <div class="border-b w-full"></div>
    <span class="px-2 text-sm font-bold text-gray-500">
      {{ name }}
    </span>
    <div class="border-b w-full"></div>
  </div>
</template>

<script>
export default {
  name: 'DeviderCenter',
  props: {
    name: {
      type: String,
      default: 'OR',
    },
  },
}
</script>
