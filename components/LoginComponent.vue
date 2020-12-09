<template>
  <div class="login-component">
    <div v-if="isDesktop" class="banner">
      <app-logo />
    </div>
    <div class="login">
      <app-logo v-if="!isDesktop" />
      <div class="form">
        <h1>Faça login para continuar:</h1>
        <div class="input-wrapper">
          <label>Nome de usuário:</label>
          <input
            type="text"
            placeholder="Seu nome de usuario"
            v-model="data.user"
          >
          <p v-if="userValidation && validation">{{ pwdValidationMessage }}</p>
        </div>
        <div class="input-wrapper">
          <label>Senha:</label>
          <input
            type="password"
            placeholder="******"
            v-model="data.password"
          >
          <p v-if="pwdValidation && validation">{{ pwdValidationMessage }}</p>
        </div>

        <p v-if="userFound">* Usuário não cadastrado</p>

        <button @click="submit">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

// Import svg
const AppLogo = (): any => import('~/assets/images/svg/logo.svg')

@Component({
  components: {
    AppLogo
  }
})
export default class LoginComponent extends Vue {
  // props
  @Prop({ type: Boolean }) userFound!: Boolean

  // variables
  data = {
    user: '',
    password: ''
  }
  validation = false
  userValidation = false
  userValidationMessage = ''
  pwdValidation = false
  pwdValidationMessage = ''

  // functions
  submit(): void {
    // certifica que submeteu o formulário
    this.validation = true

    // como optei em não utilizar uma lib de validação fiz uma validação simples
    if(!this.data.user) {
      this.userValidation = true
      this.userValidationMessage = 'Campo obrigatório!'
    } else {
      this.userValidation = false
    }

    if(!this.data.password) {
      this.pwdValidation = true
      this.pwdValidationMessage = 'Campo obrigatório!'
    } else {
      this.pwdValidation = false
    }
    
    if (this.data.user && this.data.password){
      this.$emit('submit', this.data)
    }
  }
}
</script>

<style lang="scss">
.login-component {
  display: flex;
  & > .banner {
    @include desktop {
      position: relative;
      height: 100vh;
      width: 70%;
      background: linear-gradient(rgba(255,64,89,0.2), rgba(198,24,70,0.2)), url("../assets/images/banner.jpg");
      background-repeat: no-repeat;
      background-size: cover;

      & > svg {
        fill: $light-color;
        width: 230px;
        height: 70px;
        position: absolute;
        top: 24px;
        left: 24px;
      }
    }
  }
  & > .login {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    position: relative;

    @include desktop {
      width: 30%;
    }

    & > svg {
      width: 200px;
      height: 60px;
      margin: 0 auto;
      position: absolute;
      top: 16px;
    }
    & > .form {
      max-width: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > h1 {
        @include default-title;
        margin-bottom: 24px;
      }
      & > .input-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
        width: 100%;

        & > label {
          margin-bottom: 4px;
          font-size: 16px;
          color: $text-color;
          font-family: $text-font;
        }

        & > input {
          box-sizing: border-box;
          height: 40px;
          padding: 4px 8px;
          border: 2px solid $border-color;
          color: $input-color;
          border-radius: 3px;
          transition: all 1;

          &:hover,
          &:focus {
            border: 2px solid $primary-color;
            outline: none;
          }
        }

        & > p {
          color: $primary-color;
          font-size: 12px;
          margin: 4px 0 0 0;
        }
      }

      & > p {
        color: $primary-color;
        font-size: 14px;
        margin: 8px 0;
      }

      & > button {
        @include default-button;
        margin-top: 16px;
      }
    }
  }
}
</style>