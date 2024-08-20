<template>
  <swiper
    class="main-swiper swiper"
    :space-between="15"
    loop
    :pagination="paginationOptions"
  >
    <swiper-slide>
      <img src="@/assets/img/main/1.png" alt="" />
      <div class="main-swiper__container">
        <div class="main-swiper__title">Аренда техники</div>
        <div class="main-swiper__subtitle">
          Оптимальные решения для ваших задач: быстро, надежно и по доступной
          цене
        </div>
        <router-link to="/rent">
          <Button class="main-swiper__button"> Подробнее </Button>
        </router-link>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/main/2.png" alt="" />
      <div class="main-swiper__container">
        <div class="main-swiper__title">Металло&shy;обработка</div>
        <div class="main-swiper__subtitle">
          Ваш партнер в сфере точности, качества и надежности металлообработки
        </div>
        <router-link to="/metalworking">
          <Button class="main-swiper__button"> Подробнее </Button>
        </router-link>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/main/3.png" alt="" />
      <div class="main-swiper__container">
        <div class="main-swiper__title">Ремонт и ТО</div>
        <div class="main-swiper__subtitle">
          Профессиональный подход к уходу и обслуживанию вашей техники
        </div>
        <router-link to="/repair">
          <Button class="main-swiper__button"> Подробнее </Button>
        </router-link>
      </div>
    </swiper-slide>
    <div class="main-pagination swiper-pagination"></div>
  </swiper>
</template>

<script lang="ts">
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
SwiperCore.use([Pagination]);
import { Component, Vue } from "vue-property-decorator";
import Button from "./Button.vue";
@Component({
  components: {
    Button,
    Swiper,
    SwiperSlide,
  },
})
export default class HomeSlider extends Vue {
  paginationOptions = {
    el: ".swiper-pagination",
    clickable: true,
  };
}
</script>

<style lang="scss">
.main-swiper {
  margin: 0 30px;
  border-radius: 24px;
  & .main-pagination {
    bottom: 20px;
    & .swiper-pagination-bullet {
      margin: 0 4px;
      cursor: pointer;
      opacity: 1;
      background: transparent;
      border: 1px solid white;
      transition: all 0.3s ease 0s;
      width: 12px;
      height: 12px;
      &.swiper-pagination-bullet-active {
        background: #ffba08;
        border-color: #ffba08;
      }
    }
  }
  & .swiper-slide {
    height: auto;
    display: flex;
    align-items: flex-end;
    border-radius: 24px;
    position: relative;
    padding: 36vh 0 105px;
    color: #fff;
    & > img {
      border-radius: inherit;
      object-position: center right;
      z-index: 0;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }
  @media (max-width: 991px) {
    border-radius: 12px;
    margin: 0 23px;
    & .swiper-slide {
      border-radius: 12px;
    }
  }
  &__container {
    width: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    @media (max-width: 991px) {
      text-align: center;
      align-items: center;
      padding: 0 20px;
    }
  }

  &__title {
    font-size: 48px;
    font-weight: 600;
    line-height: 1.1;
    @media (max-width: 991px) {
      font-size: 32px;
    }
  }
  &__subtitle {
    margin-top: 10px;
    font-size: 18px;
    max-width: 397px;
    margin-bottom: 36px;
    @media (max-width: 991px) {
      font-size: 16px;
      margin-top: 5px;
      margin-bottom: 24px;
    }
  }
  &__button {
    border-color: white;
    background: transparent;
    color: #fff;
    &:hover {
      background: #fff;
      color: #141414;
      box-shadow: none;
    }
    @media (max-width: 991px) {
      width: 100%;
      max-width: 500px;
    }
  }
}
</style>
