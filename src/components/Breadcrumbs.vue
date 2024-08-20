<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__container">
      <router-link to="/"> Главная страница</router-link>
      <b>/</b>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Breadcrumbs extends Vue {}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  padding: 8px 0;
  &__container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
    gap: 5px;
    & a {
      text-underline-position: under;
    }
    & a:hover {
      text-decoration: underline;
    }
  }
}
</style>
