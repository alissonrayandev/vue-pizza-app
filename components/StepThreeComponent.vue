<template>
  <div class="step-three-component">
    <div class="content">
      <h1>Escolha uma bebida:</h1>

      <div class="options">
        <div
          :class="['option', {'-selected': drinkData === i.id}]"
          v-for="i in drinkOptions"
          :key="i.id"
          @click="$emit('update', i.id)"
        >
          <h1>
            {{ i.name }}
          </h1>
          <p>
            {{ 'R$ '+(i.price || 0).toFixed(2) }}
          </p>
        </div>
      </div>

      <p v-if="drinkData === null && validation">
        É necessário selecionar uma opção para continuar!
      </p>

      <div class="actions">
        <button class="back" @click="$router.push('/passo-2')">
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
export default class StepThreeComponent extends Vue {
  // props
  @Prop({ type: Array }) drinkOptions!: Array<any>
  @Prop({ type: Number }) drinkData!: Number

  @Prop({ type: Boolean }) validation!: Boolean
}
</script>

<style lang="scss">
  .step-three-component {
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

          &:hover {
            cursor: pointer;
            background-color: rgba($selected-color, 0.3);
          }

          &.-selected {
            background-color: rgba($selected-color, 0.3);
          }

          & > h1 {
            @include default-title;
          }
          & > p {
            color: $secondary-color;
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