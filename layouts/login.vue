<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

// COMPONENT
@Component({
  components: {}
})
export default class LoginLayout extends Vue {
  // STORE
  @Action('login/checkPrevious') checkPrevious

  mounted() {
    this.checkPrevious()
  }
}
</script>

<style></style>
