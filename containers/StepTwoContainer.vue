<template>
  <step-two-component
    :pizza-options="pizzasOptionsData"
    :pizza-data="pizzaData"
    :validation="validation"
    :day="day"
    @update="update"
    @continue="submit"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

const StepTwoComponent = (): any => import('~/components/StepTwoComponent.vue')

@Component({
  components: {
    StepTwoComponent
  }
})
export default class StepOneContainer extends Vue {
  // props
  @Action('pizza/getPizzaOptions') getPizzaOptions
  @Action('pizza/updatePizza') updatePizza

  @Getter('pizza/pizzasOptionsData') pizzasOptionsData
  @Getter('pizza/pizzaData') pizzaData

  // variables
  validation = false
  day = 1

  // hooks
  async mounted() {
    await this.getPizzaOptions()
    const d = new Date()
    this.day = d.getDay()
  }

  // functions

  update(v) {
    this.updatePizza(v)
  }

  submit() {
    this.validation = true
    if(this.pizzaData !== null) {
      this.$router.push('/passo-3')
    }
  }
}
</script>
