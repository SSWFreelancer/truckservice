<template>
  <section class="metall">
    <div class="metall__container">
      <Title class="metall__title">Металло­обработка</Title>
      <div class="metall__cards">
        <div class="metall__card">
          <img src="@/assets/img/metall/1.png" alt="" />
          <p>Токарная обработка металла</p>
        </div>
        <div class="metall__card">
          <img src="@/assets/img/metall/2.png" alt="" />
          <p>Фрезерование металлических деталей</p>
        </div>
        <div class="metall__card">
          <img src="@/assets/img/metall/3.png" alt="" />
          <p>Плазменная резка, сварка, наплавка</p>
        </div>
        <div class="metall__card">
          <img src="@/assets/img/metall/4.png" alt="" />
          <p>Сварка алюминия и цветных металлов</p>
        </div>
      </div>
      <div class="buttons">
        <router-link to="/metalworking" v-if="metallLink">
          <Button class="orange-hohl">Подробнее</Button>
        </router-link>
        <Button @click="openPopup">Оставить заявку</Button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import Title from "@/components/Title.vue";
import { mapActions } from "vuex";
@Component({
  components: {
    Button,
    Title,
  },
  methods: {
    ...mapActions(["openPopup"]),
  },
})
export default class Metall extends Vue {
  @Prop({ required: false, default: true }) metallLink!: boolean;
}
</script>

<style lang="scss" scoped>
.metall {
  &__container {
    width: 100%;
  }
  &__title {
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 835px) {
      flex-direction: column;
      gap: 12px;
    }
  }
  &__card {
    flex: 0 0 calc(50% - 10px);
    border-radius: 12px;
    background: #e4e4e4;
    position: relative;
    padding: 28px 36px 90px;
    overflow: hidden;
    & img {
      pointer-events: none;
      position: absolute;
      left: 0;
      z-index: 0;
      height: 199px;
      top: 0;
    }
    & p {
      position: relative;
      z-index: 1;
      margin-left: auto;
      text-align: right;
      max-width: 230px;
      font-size: 22px;
      font-weight: 600;
    }
    @media (max-width: 835px) {
      padding: 28px 17px 90px;
      & img {
        height: 170px;
      }
      & p {
        max-width: 195px;
      }
    }
  }
}
</style>
