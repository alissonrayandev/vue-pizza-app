<template>
  <step-one-container />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const StepOneContainer = (): any => import('~/containers/StepOneContainer.vue')

@Component({
  components: {
    StepOneContainer
  }
})
export default class StepOnePage extends Vue {}
</script>
