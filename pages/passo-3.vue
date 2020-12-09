<template>
  <step-three-container />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const StepThreeContainer = (): any => import('~/containers/StepThreeContainer.vue')

@Component({
  components: {
    StepThreeContainer
  }
})
export default class StepThreePage extends Vue {}
</script>
