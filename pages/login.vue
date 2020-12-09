<template>
  <login-container />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const LoginContainer = (): any => import('~/containers/LoginContainer.vue')


@Component({
  layout: 'login',
  components: {
    LoginContainer
  }
})
export default class LoginPage extends Vue {}
</script>
