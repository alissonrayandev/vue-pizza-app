<template>
  <home-component />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const HomeComponent = (): any => import('~/components/HomeComponent.vue')

@Component({
  components: {
    HomeComponent
  }
})
export default class HomeContainer extends Vue {}
</script>
