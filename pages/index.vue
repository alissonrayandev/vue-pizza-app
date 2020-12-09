<template>
  <home-container />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const HomeContainer = (): any => import('~/containers/HomeContainer.vue')

@Component({
  components: {
    HomeContainer
  }
})
export default class HomePage extends Vue {}
</script>
