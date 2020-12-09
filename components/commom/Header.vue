<template>
  <header class="header-component">
    <app-logo />

    <p>Pontos de fidelidade: {{ allPoints }}</p>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

const AppLogo = (): any => import('~/assets/images/svg/logo.svg')

@Component({
  components: {
    AppLogo
  }
})
export default class HeaderComponent extends Vue {
   @Getter('pizza/allPoints') allPoints
}
</script>

<style lang="scss">
  .header-component {
    height: 70px;
    width: 100vw;
    background-color: $primary-color;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > svg {
      fill: $light-color;
      width: auto;
      height: 60px;
    }

    & > p {
      font-family: $title-font;
      color: $light-color;
      margin: 0 0 0 12px;
      text-align: right;
      padding: 0 8px;

      @include desktop {
        margin: 0 24px 0 12px;
      }
    }
  }
</style>
