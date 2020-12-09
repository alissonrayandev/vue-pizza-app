<template>
  <Footer class="footer-component">
    <p>
      Alisson Rayan Nogueira Gabriel <br />
      Copyright - 2020
    </p>
  </Footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'


@Component({
  components: {}
})
export default class FooterComponent extends Vue {}
</script>

<style lang="scss">
  .footer-component {
    height: 70px;
    width: 100vw;
    background-color: $light-background;
    display: flex;
    align-items: center;
    justify-content: center;
    & > p {
      text-align: center;
      color: $text-color;
      font-family: $text-font;
      font-size: 12px;
    }
  }
</style>
