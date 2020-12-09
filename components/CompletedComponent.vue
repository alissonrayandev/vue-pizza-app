<template>
  <div class="completed-component">
    <div class="content">
      <div class="card">
        <checked />
        <h1>Pedido finalizado</h1>
        <button @click="$router.push('/')">Voltar para a home</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const Checked = (): any => import('~/assets/images/svg/checked.svg')

@Component({
  components: {
    Checked
  }
})
export default class CompletedComponent extends Vue {}
</script>

<style lang="scss">
  .completed-component {
    min-height: calc(100vh - 140px);

    & > .content {
      max-width: 1080px;
      min-height: calc(100vh - 140px);
      margin: 0 auto;
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      & > .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > svg {
          fill: $green-hard;
          width: 40px;
          height: 40px;
        }

        & > h1 {
          @include default-title;
        }

        & > button {
          @include default-button;
        }
      }
    }
  }
</style>