<template>
  <div class="login">
    <h2 class="mb-2">Login!</h2>
    <hr class="mb-2" />
    <form>
      <div class="mt-4">
        <input
          type="text"
          class="form-input w-full rounded"
          name="username"
          v-model="login.username"
          placeholder="Email or Username"
        />
      </div>
      <div class="mt-4">
        <input
          type="password"
          class="form-input w-full rounded"
          name="password"
          v-model="login.password"
          placeholder="Password"
        />
      </div>
      <div class="mt-4">
        <btn icon="login" fluid>Login!</btn>
      </div>
      <devider-center class="my-3" />
      <div class="flex items-center justify-center">
        <btn icon="facebook" iconOnly />
        <btn icon="github" iconOnly />
        <btn icon="google" iconOnly />
      </div>
    </form>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue'
import DeviderCenter from '@/components/DeviderCenter.vue'

export default {
  components: { Btn, DeviderCenter },
  name: 'Login',
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    formLogin() {
      return true
    },
  },
}
</script>
