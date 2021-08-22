<template>
  <div class="flex justify-center items-center min-h-screen flex-col w-full">
    <h1>Home Pages!</h1>
    <h2>Home Pages!</h2>
    <h3>Home Pages!</h3>
    <h4>Home Pages!</h4>
    <h5>Home Pages!</h5>
    <h6>Home Pages!</h6>
    <btn icon="home">Ini Tombol!</btn>
    <btn icon="facebook" round iconOnly>Ini Tombol!</btn>
    <btn icon="github" round iconOnly>Ini Tombol!</btn>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue'

export default {
  components: { Btn },
  name: 'Home',
}
</script>
