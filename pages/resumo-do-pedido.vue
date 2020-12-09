<template>
  <order-container />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const OrderContainer = (): any => import('~/containers/OrderContainer.vue')

@Component({
  components: {
    OrderContainer
  }
})
export default class OrderPage extends Vue {}
</script>
