<template>
  <div class="step-two-component">
    <div class="content">
      <h1>Escolha o sabor da sua pizza:</h1>

      <div class="options">
        <div
          :class="['option', {'-selected': pizzaData === i.id}]"
          v-for="i in pizzaOptions"
          :key="i.id"
          @click="$emit('update', i.id)"
        >
          <p v-if="day === i.id" class="pizza_day">Pizza do dia</p>
          <h1>
            {{ i.name }}
          </h1>
          <p class="ingredients">
            {{ 'Ingredientes: '+i.ingredients }}
          </p>
          <p class="price">
            {{ 'R$ '+(i.price || 0).toFixed(2) }}
          </p>
        </div>
      </div>

      <p v-if="pizzaData === null && validation">
        É necessário selecionar uma opção para continuar!
      </p>

      <div class="actions">
        <button class="back" @click="$router.push('/passo-1')">
          <arrow />
        </button>
        <button class="next" @click="$emit('continue')">
          Continuar
        </button>
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
export default class StepOneComponent extends Vue {
  // props
  @Prop({ type: Array }) pizzaOptions!: Array<any>
  @Prop({ type: Number }) pizzaData!: Number
  @Prop({ type: Number }) day!: Number

  @Prop({ type: Boolean }) validation!: Boolean
}
</script>

<style lang="scss">
  .step-two-component {
    min-height: calc(100vh - 140px);

    & > .content {
      max-width: 1080px;
      margin: 0 auto;
      padding: 16px;

      & > h1 {
        @include default-title;
      }

      & > .options {
        & > .option {
          box-sizing: border-box;
          margin-bottom: 16px;
          padding: 16px;
          border-radius: 16px;
          background-color: $light-background;
          transition: all 0.6s;
          position: relative;

          &:hover {
            cursor: pointer;
            background-color: rgba($selected-color, 0.3);
          }

          &.-selected {
            background-color: rgba($selected-color, 0.3);
          }

          & > .pizza_day {
            position: absolute;
            top: -16px;
            right: 24px;
            padding: 8px 16px;
            background: $green-hard;
            color: $light-color;
            border-radius: 0 0 12px 12px;
            font-family: $text-font;
          }

          & > h1 {
            @include default-title;
          }
          & > .price {
            color: $secondary-color;
            font-size: 16px;
            font-family: $text-font;
          }

          & > .ingredients {
            color: $text-color;
            font-size: 16px;
            font-family: $text-font;
          }
        }
      }

      & > p {
        color: $primary-color;
        font-size: 14px;
        margin: 8px 0;
      }

      & > .actions {
        @include actions;
      }
    }
  }
</style>