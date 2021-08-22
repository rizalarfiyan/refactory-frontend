<template>
  <div class="bg-gray-300 flex justify-center items-center min-h-screen flex-col w-full">
    <div class="bg-white rounded p-4 auth-wrapper text-center">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>
