<template>
  <login-component :user-found="getUserFound" @submit="auth"/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

const LoginComponent = (): any => import('~/components/LoginComponent.vue')

@Component({
  components: {
    LoginComponent
  }
})
export default class LoginContainer extends Vue {
  @Action('login/auth') auth
  @Getter('login/getUserFound') getUserFound
}
</script>
