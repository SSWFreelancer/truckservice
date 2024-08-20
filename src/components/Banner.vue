<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__content">
        <img
          :src="imgsrc"
          :class="visibleBottom ? 'visibleBottom' : ''"
          alt=""
        />
        <div class="banner__title">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
const defaultImage = require("@/assets/img/main/1.png") as string;
@Component
export default class Banner extends Vue {
  @Prop({
    required: false,
    default: defaultImage,
  })
  imgsrc!: string;
  @Prop({
    required: false,
    default: false,
  })
  visibleBottom!: Boolean;
}
</script>

<style lang="scss">
.banner {
  margin-top: 12px;
  color: #fff;
  & ~ .block {
    padding-top: 70px;
    @media (max-width: 991px) {
      padding-top: 48px;
    }
  }
  &__container {
  }
  &__content {
    padding: 49px 38px;
    position: relative;
    border-radius: 12px;
    & > img {
      border-radius: inherit;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
      object-position: top;
      &.visibleBottom {
        object-position: 100% 85%;
      }
    }
    @media (max-width: 991px) {
      padding: 49px 16px;
    }
    @media (max-width: 600px) {
      padding: 34px 16px;
    }
  }
  &__title {
    position: relative;
    z-index: 1;
    font-size: 42px;
    font-weight: 600;
    @media (max-width: 991px) {
      font-size: 32px;
    }
  }
}
</style>
