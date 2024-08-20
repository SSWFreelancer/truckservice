<template>
  <div id="contacts" class="contacts block">
    <div class="contacts__container">
      <Title class="contacts__title">Контакты</Title>
      <div class="contacts__body">
        <div class="contacts__image">
          <img src="@/assets/img/contacts/1.png" alt="" />
        </div>
        <div class="contacts__content">
          <p>
            <small> Мы находимся </small>
            <b> г. Краснодар, <nobr>п. Колосистый 54</nobr> </b>
          </p>
          <p>
            <small> Связаться с нами </small>
            <a href="+79885231144"> + 7 (988) 523-11-44 </a>
          </p>
          <Button class="yellow" @click="openPopup"> Оставить заявку </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  .page + &.block {
    padding-top: 0;
  }
  &__body {
    overflow: hidden;
    display: flex;
    align-items: center;
    background: #f6f6f6;
    border-radius: 12px;
    padding: 30px 100px;
    gap: 20px;
    justify-content: space-between;
    @media (max-width: 991px) {
      display: block;
      padding: 50px 20px;
    }
  }
  &__image {
    flex: 0 0 345px;
    width: 345px;
    & img {
      max-width: 100%;
    }
    @media (max-width: 991px) {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 0 auto 20px;
    }
  }
  &__content {
    & > * {
      margin-bottom: 44px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    & .button {
      max-width: 220px;
      margin: 0 auto;
      @media (max-width: 991px) {
        width: 100%;
        min-width: 0;
        max-width: 100%;
      }
    }
    & p {
      display: flex;
      flex-direction: column;
      text-align: center;
      & small {
        display: block;
        text-align: center;
        margin-bottom: 6px;
        font-size: 18px;
        opacity: 0.7;
      }
      & b,
      & a {
        display: block;
        text-align: center;
        font-size: 22px;
        font-weight: 600;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
import Button from "./Button.vue";
import Title from "./Title.vue";
@Component({
  components: {
    Button,
    Title,
  },
  methods: {
    ...mapActions(["openPopup"]),
  },
})
export default class Contacts extends Vue {}
</script>
