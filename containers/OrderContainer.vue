<template>
  <order-component
    :pizza="pizzaDetails"
    :border="borderDetails"
    :drink="drinkDetails"
    :points="allPoints"
    :pizza-of-day="isPizzaOfDay"
    @continue="submit"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

const OrderComponent = (): any => import('~/components/OrderComponent.vue')

@Component({
  components: {
    OrderComponent
  }
})
export default class OrderContainer extends Vue {
  @Getter('pizza/allData') allData
  @Getter('pizza/allOptions') allOptions
  @Getter('pizza/allPoints') allPoints

  @Action('pizza/addPoints') addPoints

  // variables
  isPizzaOfDay = false

  // Computeds
  get pizzaDetails(): Object {
      return this.allOptions?.pizza?.find((v) => { 
      return v?.id === this.allData?.pizza
    }) || {}
  }

  get borderDetails(): Object {
    return this.allOptions?.border?.find((v) => { 
      return v?.id === this.allData?.border
    }) || {}
  }

  get drinkDetails(): Object {
    return this.allOptions?.drink?.find((v) => { 
      return v?.id === this.allData?.drink
    }) || {}
  }

  mounted() {
    const d = new Date()
    const day = d.getDay()

    if ((this.pizzaDetails as any).id === day) {
      this.isPizzaOfDay = true
    }
  }

  // funtions
  submit(): void {
    if(this.isPizzaOfDay) {
      this.addPoints()
    }
    this.$router.push('/pedido-finalizado')
  }
}
</script>
