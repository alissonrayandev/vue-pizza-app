/* eslint-disable */
import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      matchMedia: window.matchMedia('(min-width: 768px)'),
      isDesktop: false
    }
  },
  methods: {
    setBreakpoint () {
      this.isDesktop = this.matchMedia && this.matchMedia.matches
    }
  },
  beforeDestroy () {
    this.matchMedia.removeListener(this.setBreakpoint)
  },
  mounted () {
    this.matchMedia.addListener(this.setBreakpoint)
    this.setBreakpoint()
  }
})
