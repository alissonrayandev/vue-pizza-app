<template>
  <div class="order-component">
    <div class="content">
      <div class="card">
        <h1>Resumo do pedido:</h1>

        <div class="details">
          <p>
            <b>Pizza:</b> {{ pizza.name }}
          </p>
          <p>
            <b>Borda:</b> {{ border.name }}
          </p>
          <p>
            <b>Bebida:</b> {{ drink.name }}
          </p>
          <p>
            <b>Pizza do dia:</b> {{ pizzaOfDay ? 'Sim' : 'Não' }}
          </p>
          <p>
            <b>Valor:</b> R$ {{ (border.price + pizza.price + drink.price).toFixed(2) }}
          </p>
          <p><b>Pontos:</b> {{ points }} pontos</p>
          <p class="-total">
            <b>Valor Total:</b> {{
              points >= 40 ? 'R$ '+((border.price + pizza.price + drink.price).toFixed(2) - 10) :
              'R$ '+((border.price + pizza.price + drink.price).toFixed(2))
            }}
          </p>
        </div>
        <p>A cada compra do dia você ganha 10 pontos de fidelidade, ao ter 40 pontos você ganha R$ 10,00 de desconto.</p>

        <div class="actions">
          <button class="back" @click="$router.push('/passo-3')">
            <arrow />
          </button>
          <button class="next" @click="$emit('continue')">
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

const Arrow = (): any => import('~/assets/images/svg/left-arrow.svg')

@Component({
  components: {
    Arrow
  }
})
export default class OrderComponent extends Vue {
  @Prop({ type: Object, default: {} }) pizza!: Object
  @Prop({ type: Object, default: {} }) border!: Object
  @Prop({ type: Object, default: {} }) drink!: Object
  @Prop({ type: Boolean, default: false }) pizzaOfDay!: Boolean
  @Prop({ type: Number, default: 0 }) points!: Number
}
</script>

<style lang="scss">
  .order-component {
    min-height: calc(100vh - 140px);

    & > .content {
      max-width: 1080px;
      margin: 0 auto;
      padding: 16px;

      & > .card {
        max-width: 600px;
        margin: 0 auto;
        background: $light-background;
        border-radius: 16px;
        padding: 16px 24px;

        & > h1 {
          @include default-title;
        }

        & > .details {
          & > p {
            
            font-size: 16px;
            color: $text-color;
            margin: 0;
            padding: 8px 0;

            &.-total {
              background: $border-color;
            }
          }
        }

        & > p {
          color: $green-hard;
          font-family: $text-font;
          background: rgba($green-hard, 0.3);
          padding: 12px;
          margin-top: 24px;
          font-family: 12px;
          border-radius: 12px;
        }

        & > .actions {
          @include actions;
        }
      }
    }
  }
</style>