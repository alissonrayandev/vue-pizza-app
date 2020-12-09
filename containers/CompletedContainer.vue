<template>
  <completed-component />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const CompletedComponent = (): any => import('~/components/CompletedComponent.vue')

@Component({
  components: {
    CompletedComponent
  }
})
export default class CompletedContainer extends Vue {}
</script>
