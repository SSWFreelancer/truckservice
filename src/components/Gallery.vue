<template>
  <section class="gallery">
    <div class="gallery__container">
      <Title class="gallery__title">Галерея</Title>
      <div class="gallery__body">
        <swiper
          class="gallery__swiper"
          :slides-per-view="4"
          :space-between="20"
          loop
          :navigation="navigation"
          :breakpoints="breakpoints"
        >
          <swiper-slide>
            <img alt="" src="@/assets/img/gallery/1.png" />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img alt="" src="@/assets/img/gallery/2.png" />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img alt="" src="@/assets/img/gallery/3.png" />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img alt="" src="@/assets/img/gallery/4.png" />
          </swiper-slide>
        </swiper>
        <div class="gallery__arrow gallery__arrow-left">
          <img v-if="whiteArrow" src="@/assets/img/gallery/arrow.svg" alt="" />
          <img v-else src="@/assets/img/gallery/arrow-white.svg" alt="" />
        </div>
        <div class="gallery__arrow gallery__arrow-right">
          <img v-if="whiteArrow" src="@/assets/img/gallery/arrow.svg" alt="" />
          <img v-else src="@/assets/img/gallery/arrow-white.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper";
SwiperCore.use([Navigation]);

import { Component, Vue, Prop } from "vue-property-decorator";
import Title from "./Title.vue";
@Component({
  components: {
    Title,
    Swiper,
    SwiperSlide,
  },
})
export default class Gallery extends Vue {
  @Prop({ required: false, default: true }) whiteArrow!: boolean;
  navigation = {
    prevEl: ".gallery__arrow-left",
    nextEl: ".gallery__arrow-right",
  };

  breakpoints = {
    992: {
      slidesPerView: 4,
    },
    881: {
      slidesPerView: 3,
    },
    600: {
      spaceBetween: 23,
      slidesPerView: 2.2,
    },
    0: {
      spaceBetween: 23,
      slidesPerView: 1.5,
    },
  };
}
</script>

<style lang="scss">
.gallery {
  &__swiper {
    border-radius: 12px;
    @media (max-width: 1100px) {
      max-width: 100%;
      border-radius: 0;
      overflow: visible;
    }
  }
  & .swiper-slide {
    height: auto;
    border-radius: 12px;
    & img {
      border-radius: inherit;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__body {
    position: relative;
    gap: 20px;
    display: flex;
    align-items: center;
  }
  &__arrow {
    position: absolute;
    cursor: pointer;
    width: 48px;
    height: 48px;
    left: 0;
    top: 50%;
    transform: translate(-115%, -50%);
    border-radius: 50%;
    transition: all 0.3s ease 0s;
    &:hover {
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
    }
    &.swiper-button-disabled {
      opacity: 0.6;
      box-shadow: none;
      cursor: auto;
    }
    &-right {
      transform: translate(115%, -50%) rotate(-180deg);
      left: auto;
      right: 0;
    }
    & img {
      height: 100%;
      width: 100%;
    }
    @media (max-width: 1100px) {
      display: none;
    }
  }
}
</style>
