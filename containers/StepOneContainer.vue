<template>
  <step-one-component
    :border-options="bordersOptionsData"
    :border-data="borderData"
    :validation="validation"
    @update="updateBorder"
    @continue="submit"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

const StepOneComponent = (): any => import('~/components/StepOneComponent.vue')

@Component({
  components: {
    StepOneComponent
  }
})
export default class StepOneContainer extends Vue {
  // props
  @Action('pizza/getBorderOptions') getBorderOptions
  @Action('pizza/updateBorder') updateBorder

  @Getter('pizza/bordersOptionsData') bordersOptionsData
  @Getter('pizza/borderData') borderData

  // variables
  validation = false

  // hooks
  async mounted() {
    await this.getBorderOptions()
  }

  // functions

  update(v) {
    this.updateBorder(v)
  }

  submit() {
    this.validation = true
    if(this.borderData !== null) {
      this.$router.push('/passo-2')
    }
  }
}
</script>
