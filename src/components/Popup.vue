<template>
  <div id="popup" :class="{ popup: true, open: isPopupOpen }">
    <p class="popup__close" @click="closePopup"></p>
    <div class="popup__content">
      <div class="popup__close" @click="closePopup">
        <img src="@/assets/img/close.svg" alt="" />
      </div>
      <Title class="popup__title">Заявка</Title>
      <Subtitle class="popup__subtitle">
        Оставьте ваши контакты и наш менеджер свяжется с вами в ближайшее время
      </Subtitle>
      <form action="#">
        <div class="popup__input">
          <p>Ваше имя</p>
          <input type="text" required v-model="popupName" />
        </div>
        <div class="popup__input">
          <p>Ваш телефон</p>
          <input
            type="tel"
            required
            v-model="popupPhone"
            v-mask="'+998 (##) ###-##-##'"
          />
        </div>
        <div class="popup__input">
          <p>E-mail</p>
          <input type="email" required v-model="popupEmail" />
        </div>
        <Button> Оставить заявку </Button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1030;
  display: grid;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.3s ease 0s;
  &.open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  &__close {
    cursor: pointer;
    position: absolute;
    top: 13px;
    right: 13px;
    & img {
      width: 36px;
    }
  }
  & > p {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    right: auto;
  }
  &__content {
    position: relative;
    overflow-y: auto;
    max-height: calc(100vh - 40px);
    max-width: 500px;
    width: calc(100vw - 46px);
    background: #fff;
    border-radius: 12px;
    padding: 40px 30px;
    & button {
      min-width: 0;
      margin-top: 24px;
      width: 100%;
    }
    @media (max-width: 500px) {
      padding: 30px 20px;
    }
  }
  &__title {
    text-align: center;
    margin-bottom: 12px;
  }
  &__ico {
    width: 71px;
    margin: 0 auto 32px;
    & img {
      width: 100%;
    }
  }
  &__text {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
  }
  &__subtitle {
    max-width: 350px;
    text-wrap: balance;
    margin: 0 auto 32px;
    text-align: center;
  }
  &__input {
    margin-bottom: 16px;
    & input {
      width: 100%;
      border-radius: 10px;
      border: 0.4px solid rgba(46, 50, 51, 0.5);
      background: #f6f6f6;
      padding: 12px;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
    }
    & p {
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 8px;
      transition: all 0.3s ease 0s;
      &.error {
        color: red;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";
import Button from "./Button.vue";
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";
import VueMask from "v-mask";
Vue.use(VueMask);
@Component({
  components: {
    Button,
    Title,
    Subtitle,
  },
  computed: {
    ...mapGetters({
      isPopupOpen: "isPopupOpen",
    }),
  },
  methods: {
    ...mapActions(["closePopup"]),
  },
})
export default class Popup extends Vue {
  popupPhone = null;
  popupName = null;
  popupEmail = null;
}
</script>
