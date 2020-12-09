<template>
  <div>
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

const AppHeader = (): any => import('~/components/commom/Header.vue')
const AppFooter = (): any => import('~/components/commom/Footer.vue')

// COMPONENT
@Component({
  components: {
    AppHeader,
    AppFooter
  }
})
export default class DefaultLayout extends Vue {
  // STORE
  @Action('login/checkPrevious') checkPrevious

  mounted() {
    this.checkPrevious()
  }
}
</script>

<style>
</style>
