<template>
  <button @click="handleClick" class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Button extends Vue {
  handleClick(event: Event) {
    this.$emit("click", event);
  }
}
</script>

<style lang="scss">
.button {
  display: block;
  font-size: 16px;
  color: #fff;
  background: #e85d04;
  text-align: center;
  font-size: 16px;
  padding: 14.5px 10px;
  min-width: 220px;
  border: 1px solid #e85d04;
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  &:hover {
    box-shadow: rgba(232, 93, 4, 0.8) 5px 5px 17px;
  }
  &.yellow {
    background: #ffba08;
    border-color: #ffba08;
    color: #141414;
    &:hover {
      box-shadow: rgba(255, 186, 8, 0.8) 5px 5px 17px;
    }
  }
  &.orange-hohl {
    background: transparent;
    color: #e85d04;
    &:hover {
      box-shadow: rgba(232, 93, 4, 0.5) 5px 5px 17px;
    }
    &.yellow {
      color: #ffba08;
      &:hover {
        box-shadow: rgba(255, 186, 8, 0.5) 5px 5px 17px;
      }
    }
  }
}
</style>
