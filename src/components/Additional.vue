<template>
  <section :class="yellowType ? 'additional ' : 'additional yellow'">
    <div class="additional__container">
      <Title class="additional__title">Дополнительное оборудование</Title>
      <div class="additional__cards">
        <div class="additional__left">
          <div class="additional__card">
            <img v-if="yellowType" src="@/assets/img/additional/1.png" alt="" />
            <img v-else src="@/assets/img/additional/5.png" alt="" />
            <p>3 размера ковша:</p>
            <span> 30/48/100 см </span>
          </div>
          <div class="additional__card">
            <img v-if="yellowType" src="@/assets/img/additional/2.png" alt="" />
            <img v-else src="@/assets/img/additional/6.png" alt="" />
            <p>Навесная бетономешалка</p>
            <span> 200л </span>
          </div>
        </div>
        <div class="additional__right">
          <div class="additional__card">
            <img v-if="yellowType" src="@/assets/img/additional/3.png" alt="" />
            <img v-else src="@/assets/img/additional/7.png" alt="" />
            <p>Гидробур</p>
          </div>
          <div class="additional__card">
            <img v-if="yellowType" src="@/assets/img/additional/4.png" alt="" />
            <img v-else src="@/assets/img/additional/8.png" alt="" />
            <p>Гидромолот</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Title from "./Title.vue";
@Component({
  components: {
    Title,
  },
})
export default class Additional extends Vue {
  @Prop({ required: false, default: true }) yellowType!: boolean;
}
</script>

<style lang="scss" scoped>
.additional {
  &__cards {
    display: flex;
    gap: 20px;
    @media (max-width: 991px) {
      flex-direction: column;
      gap: 12px;
    }
  }

  &__card {
    overflow: hidden;
    background: #f9eee2;
    border-radius: 12px;
    text-align: right;
    position: relative;
    flex: 1 1 auto;
    .yellow & {
      background: #f6ecc7;
    }
    & img {
      position: absolute;
      left: 0;
      top: 0;
      pointer-events: none;
    }
    & p {
      position: relative;
      z-index: 1;
      margin-left: auto;
      max-width: 200px;
      font-size: 22px;
      font-weight: 600;
    }
    & span {
      position: relative;
      z-index: 1;
      margin-left: auto;
      display: block;
      text-align: right;
      margin-top: 3px;
      color: #707070;
      font-size: 17px;
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 0 0 calc(50% - 10px);
    & .additional__card {
      padding: 31px 35px 95px;
      & img {
        height: 175px;
      }
    }
    @media (max-width: 991px) {
      gap: 12px;
      & .additional__card {
        padding: 31px 20px 75px;
        & img {
          height: 165px;
          left: -30px;
        }
      }
    }
  }

  &__right {
    flex: 0 0 calc(50% - 10px);
    display: flex;
    gap: 20px;
    & .additional__card {
      padding: 31px 20px 250px;
      & img {
        height: 374px;
      }
    }
    @media (max-width: 991px) {
      gap: 12px;
      & .additional__card {
        padding: 31px 14px 224px;
        & img {
          height: 320px;
          left: -10px;
          top: -40px;
        }
      }
    }
  }
}
</style>
