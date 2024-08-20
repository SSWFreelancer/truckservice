<template>
  <section class="repair">
    <div class="repair__container">
      <Title class="repair__title">Ремонт и ТО</Title>
      <div class="repair__cards">
        <div class="repair__card">
          <img src="@/assets/img/repair/1.png" alt="" />
          <p>Лодки и гидроциклы</p>
        </div>
        <div class="repair__card">
          <img src="@/assets/img/repair/2.png" alt="" />
          <p>Снегоходы</p>
        </div>
        <div class="repair__card">
          <img src="@/assets/img/repair/3.png" alt="" />
          <p>Квадроциклыи Багги</p>
        </div>
        <div class="repair__card big">
          <img src="@/assets/img/repair/4.png" alt="" />
          <p>Техника для дома и сада</p>
          <span>
            Мотокультиваторы, мотопомпы, насосные станции, генераторы бензиновые
            и дизельные, бензотримеры, мотокосы, бензопилы, бензорезы
          </span>
        </div>
      </div>
      <div class="buttons">
        <router-link to="/repair" v-if="repairLink">
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
export default class RepairBlock extends Vue {
  @Prop({ required: false, default: true }) repairLink!: boolean;
}
</script>

<style lang="scss" scoped>
.repair {
  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 991px) {
      flex-direction: column;
    }
  }
  &__card {
    flex: 0 0 calc(33.333% - 40px / 3);
    background: #f6f6f6;
    border-radius: 12px;
    padding: 28px;
    padding-bottom: 190px;
    position: relative;
    overflow: hidden;
    &.big {
      flex: 0 0 100%;
      padding-bottom: 110px;
    }

    & img {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 0;
    }

    & p {
      position: relative;
      z-index: 1;
      text-align: right;
      margin-left: auto;
      max-width: 145px;
      font-size: 22px;
      font-weight: 600;
    }
    & span {
      margin-top: 19px;
      display: block;
      opacity: 0.7;
      text-align: right;
      margin-left: auto;
      max-width: 400px;
      font-size: 17px;
    }
    @media (max-width: 991px) {
      padding: 28px 17px;
      padding-bottom: 130px;
      &.big {
        padding-bottom: 250px;
        & img {
          width: 400px;
          left: -80px;
        }
      }
      & span {
        margin-top: 15px;
      }
    }
  }
}
</style>
