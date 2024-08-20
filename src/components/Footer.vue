<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <router-link to="/" class="footer__logo"
          ><img src="@/assets/img/Logo.svg" alt=""
        /></router-link>
        <div class="footer__list">
          <router-link to="/rent">Аренда техники</router-link>
          <router-link to="/metalworking">Металлообработка</router-link>
          <router-link to="/repair">Ремонт и ТО</router-link>
        </div>
      </div>
      <div class="footer__middle">
        <div class="footer__left">
          <p class="footer__link">
            <img src="@/assets/img/header/location.svg" alt="" />
            <span> г. Краснодар, п. Колосистый 54 </span>
          </p>
          <a class="footer__link" href="mailto:tehniks.service@mail.ru">
            <img src="@/assets/img/header/mail.svg" alt="" />
            <span> tehniks.service@mail.ru </span>
          </a>
          <a class="footer__link" href="tel:+79885231144">
            <img src="@/assets/img/header/call.svg" alt="" />
            <span> + 7 (988) 523-11-44 </span>
          </a>
        </div>
        <Button @click="openPopup" class="orange-hohl">Оставить заявку</Button>
      </div>
      <div class="footer__bottom">
        <p>ОГРН 1202900005351</p>
        <p>ИНН 2901302787</p>
        <p>КПП 290101001</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
import Button from "./Button.vue";
@Component({
  components: {
    Button,
  },
  methods: {
    ...mapActions(["openPopup"]),
  },
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  background: #f6f6f6;
  padding: 36px 0 24px;
  @media (max-width: 700px) {
    padding: 20px 0 16px;
  }
  &__container {
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
    @media (max-width: 500px) {
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: stretch;
      align-items: stretch;
    }
  }
  &__logo {
    flex: 0 0 270px;
    width: 270px;
    & img {
      width: 100%;
    }
    @media (max-width: 500px) {
      flex: 0 0 auto;
      max-width: 250px;
      width: 100%;
    }
  }
  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 18px;
    gap: 36px;
    row-gap: 18px;
    & a {
      transition: all 0.3s ease 0s;
      &:hover {
        color: #ffba08;
      }
    }
    @media (max-width: 450px) {
      display: block;
      & a {
        display: block;
        margin-bottom: 18px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  &__middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 48px;
    margin-top: 50px;
    margin-bottom: 75px;
    @media (max-width: 500px) {
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: stretch;
      align-items: stretch;
      margin: 50px 0;
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  &__link {
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 8px;
    & img {
      flex: 0 0 16px;
      width: 16px;
    }
  }
  &__bottom {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 400;
    gap: 20px;
    row-gap: 8px;
    & p {
      opacity: 0.7;
    }
    @media (max-width: 450px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
}
</style>
