<template>
  <section class="card">
    <div class="card__container">
      <div class="card__content">
        <Title class="card__title" v-if="name">{{ name }}</Title>
        <Subtitle class="card__subtitle" v-html="text" v-if="text"> </Subtitle>
        <div class="card__items">
          <div v-if="mass" class="card__item">
            <img src="@/assets/img/card/1.svg" alt="" />
            <span> Масса </span>
            <p>{{ mass }} кг</p>
          </div>
          <div v-if="deep" class="card__item">
            <img src="@/assets/img/card/2.svg" alt="" />
            <span> Глубина копания </span>
            <p>{{ deep }} мм</p>
          </div>
          <div v-if="capacity" class="card__item">
            <img src="@/assets/img/card/3.svg" alt="" />
            <span> Емкость ковша </span>
            <p>{{ capacity }} m³</p>
          </div>
        </div>
      </div>
      <div class="card__body">
        <div class="card__image">
          <img :src="cardImage" v-if="cardImage" alt="" />
        </div>
        <div class="card__items">
          <div v-if="mass" class="card__item">
            <img src="@/assets/img/card/1.svg" alt="" />
            <span> Масса </span>
            <p>{{ mass }} кг</p>
          </div>
          <div v-if="deep" class="card__item">
            <img src="@/assets/img/card/2.svg" alt="" />
            <span> Глубина копания </span>
            <p>{{ deep }} мм</p>
          </div>
          <div v-if="capacity" class="card__item">
            <img src="@/assets/img/card/3.svg" alt="" />
            <span> Емкость ковша </span>
            <p>{{ capacity }} m³</p>
          </div>
        </div>
        <div class="card__bottom">
          <router-link to="/rent" v-if="rentLink">
            <Button class="orange-hohl">Подробнее</Button>
          </router-link>
          <Button @click="openPopup">Оставить заявку</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Title from "@/components/Title.vue";
import Subtitle from "@/components/Subtitle.vue";
import Button from "@/components/Button.vue";
import { mapActions } from "vuex";
@Component({
  components: {
    Title,
    Subtitle,
    Button,
  },
  methods: {
    ...mapActions(["openPopup"]),
  },
})
export default class Card extends Vue {
  @Prop({ required: true }) name!: string;
  @Prop({ required: true }) text!: string;
  @Prop({ required: true }) mass!: string;
  @Prop({ required: true }) deep!: string;
  @Prop({ required: true }) capacity!: string;
  @Prop({ required: true }) cardImage!: string;
  @Prop({ required: false, default: true }) rentLink!: boolean;
}
</script>

<style lang="scss" scoped>
.card {
  &__container {
    display: flex;
    gap: 80px;
    width: 100%;
    .card.reverse & {
      flex-direction: row-reverse;
    }
    @media (max-width: 991px) {
      display: block;
    }
  }
  &__content {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    .card.reverse & {
      text-align: right;
    }
    @media (max-width: 991px) {
      max-width: 100%;
      margin-bottom: 36px;
    }
  }
  &__title {
  }
  &__subtitle {
    margin-bottom: 20px;
    flex: 1 1 auto;
    @media (max-width: 991px) {
      margin-bottom: 0;
    }
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 17px;
    @media (max-width: 991px) {
      gap: 13px;
      display: none;
    }
  }
  &__item {
    flex: 0 0 calc(33.3333% - 34px / 3);
    background: #f6f6f6;
    padding: 20px 10px;
    border-radius: 12px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    .card.reverse & {
      background: #fff;
    }
    @media (max-width: 991px) {
      padding: 15px 6px;
      flex: 1 0 calc(33.3333% - 26px / 3);
    }
    & img {
      width: 42px;
      height: 42px;
    }
    & span {
      flex: 1 1 auto;
      font-size: 12px;
      font-weight: 400;
      margin-top: 19px;
      opacity: 0.7;
      margin-bottom: 2px;
    }
    & p {
      font-size: 18px;
    }
  }
  &__body {
    flex: 1 1 auto;
    min-width: 350px;
    & .card__items {
      display: none;
    }
    @media (max-width: 991px) {
      min-width: 0;
      & .card__items {
        display: flex;
        margin-top: 12px;
      }
    }
  }
  &__image {
    height: 442px;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f6f6f6;
    .card.reverse & {
      background: #fff;
    }
    & img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
    @media (max-width: 991px) {
      height: calc(372px + (442 - 372) * ((100vw - 390px) / (991 - 390)));
    }
  }
  &__bottom {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-end;
    .card.reverse & {
      flex-direction: row-reverse;
    }
    @media (max-width: 991px) {
      flex-direction: column;
      gap: 16px;
      margin-top: 48px;
      .card.reverse & {
        flex-direction: column;
      }
    }
    & a,
    button {
      min-width: 0;
      flex: 0 0 calc(50% - 10px);
      & button {
        width: 100%;
      }
    }
  }
}
</style>
