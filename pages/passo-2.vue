<template>
  <step-two-container />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const StepTwoContainer = (): any => import('~/containers/StepTwoContainer.vue')

@Component({
  components: {
    StepTwoContainer
  }
})
export default class StepTwoPage extends Vue {}
</script>
