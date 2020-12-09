<template>
  <div class="home-component">
    <div class="content">
      <div class="start">
        <h1>Experimente a melhor pizza da região!</h1>
        <button @click="$router.push('passo-1')">Começar já</button>
      </div>
      <div class="marketing">
        <div class="grid">
          <div id="p1">
            <h1>As melhores opções para você</h1>
            <button @click="$router.push('passo-1')">Escolha</button>
          </div>
          <div id="p2">
            <h1>Escolha a do dia e acumule pontos!</h1>
            <button @click="$router.push('passo-1')">Peça já</button>
          </div>
          <div id="p3">
            <h1>A partir de 19,90.</h1>
            <button @click="$router.push('passo-1')">Aproveite</button>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class HomeComponent extends Vue {}
</script>

<style lang="scss">
  .home-component {
    min-height: calc(100vh - 140px);

    & > .content {
      max-width: 1080px;
      margin: 0 auto;
      padding: 16px;

      & > .start {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $light-background;
        border-radius: 8px;
        padding: 8px 16px;
        margin: 24px 0;

        & > h1 {
          @include default-title;
        }

        & > button {
          @include default-button;
        }
      }

      & > .marketing {
        & > .grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          & > #p1 {
            box-sizing: border-box;
            padding: 16px;
            width: 100%;
            height: 220px;
            background: url('../assets/images/pizza-1.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            margin-bottom: 24px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;

            &:hover {
              background: linear-gradient(rgba(255,64,89,0.3), rgba(198,24,70,0.3)), url('../assets/images/pizza-1.jpg');
              background-size: cover;
              background-repeat: no-repeat;
              cursor: pointer;
            }

            & > h1 {
              color: $light-color;
              font-size: 24px;
              font-family: $title-font;
            }

            & > button {
              @include default-button;
            }
          }

          & > #p2 {
            box-sizing: border-box;
            padding: 16px;
            width: calc(50% - 12px);
            height: 220px;
            background: url('../assets/images/pizza-2.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;

            &:hover {
              background: linear-gradient(rgba(255,64,89,0.3), rgba(198,24,70,0.3)), url('../assets/images/pizza-2.jpg');
              background-size: cover;
              background-repeat: no-repeat;
              cursor: pointer;
            }

            & > h1 {
              color: $light-color;
              font-size: 24px;
              font-family: $title-font;
            }

            & > button {
              @include default-button;
            }
          }

          & > #p3 {
            box-sizing: border-box;
            padding: 16px;
            width: calc(50% - 12px);
            height: 220px;
            background: url('../assets/images/pizza-3.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;

            &:hover {
              background: linear-gradient(rgba(255,64,89,0.3), rgba(198,24,70,0.3)), url('../assets/images/pizza-3.jpg');
              background-size: cover;
              background-repeat: no-repeat;
              cursor: pointer;
            }

            & > h1 {
              color: $light-color;
              font-size: 24px;
              font-family: $title-font;
            }

            & > button {
              @include default-button;
            }
          }
        }
      }
    }
  }
</style>