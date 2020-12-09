<template>
  <step-three-component
    :drink-options="drinksOptionsData"
    :drink-data="drinkData"
    :validation="validation"
    @update="update"
    @continue="submit"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

const StepThreeComponent = (): any => import('~/components/StepThreeComponent.vue')

@Component({
  components: {
    StepThreeComponent
  }
})
export default class StepOneContainer extends Vue {
  // props
  @Action('pizza/getDrinkOptions') getDrinkOptions
  @Action('pizza/updateDrink') updateDrink

  @Getter('pizza/drinksOptionsData') drinksOptionsData
  @Getter('pizza/drinkData') drinkData

  // variables
  validation = false

  // hooks
  async mounted() {
    await this.getDrinkOptions()
  }

  // functions

  update(v) {
    this.updateDrink(v)
  }

  submit() {
    this.validation = true
    if(this.drinkData !== null) {
      this.$router.push('/resumo-do-pedido')
    }
  }
}
</script>
