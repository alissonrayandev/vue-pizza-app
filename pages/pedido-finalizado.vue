<template>
  <completed-container />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const CompletedContainer = (): any => import('~/containers/CompletedContainer.vue')

@Component({
  components: {
    CompletedContainer
  }
})
export default class CompletedPage extends Vue {}
</script>
