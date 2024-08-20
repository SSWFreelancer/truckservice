<template>
  <header :class="{ header: true, show: isScrolled }">
    <div class="top-header">
      <div class="top-header__container">
        <p class="top-header__link">
          <img src="@/assets/img/header/location.svg" alt="" />
          <span> г. Краснодар, п. Колосистый 54 </span>
        </p>
        <a class="top-header__link" href="mailto:tehniks.service@mail.ru">
          <img src="@/assets/img/header/mail.svg" alt="" />
          <span> tehniks.service@mail.ru </span>
        </a>
        <a class="top-header__link" href="tel:+79885231144">
          <img src="@/assets/img/header/call.svg" alt="" />
          <span> + 7 (988) 523-11-44 </span>
        </a>
      </div>
    </div>
    <div class="bottom-header">
      <div class="bottom-header__container">
        <router-link to="/" class="bottom-header__logo"
          ><img src="@/assets/img/Logo.svg" alt=""
        /></router-link>
        <nav class="menu" :class="{ menu: true, active: burger }">
          <div class="menu__logo">
            <img src="@/assets/img/Logo.svg" alt="" />
          </div>
          <ul class="menu__list">
            <li class="menu__item">
              <router-link to="/rent" class="menu__link"
                >Аренда техники</router-link
              >
            </li>
            <li class="menu__item">
              <router-link to="/metalworking" class="menu__link"
                >Металлообработка</router-link
              >
            </li>
            <li class="menu__item">
              <router-link to="/repair" class="menu__link"
                >Ремонт и ТО</router-link
              >
            </li>
            <li class="menu__item">
              <a
                @click.prevent="handleClick('contacts')"
                href="#"
                class="menu__link"
                >Контакты</a
              >
            </li>
          </ul>
          <p class="top-header__link formobile">
            <img src="@/assets/img/header/location.svg" alt="" />
            <span> г. Краснодар, п. Колосистый 54 </span>
          </p>
          <a
            class="top-header__link formobile"
            href="mailto:tehniks.service@mail.ru"
          >
            <img src="@/assets/img/header/mail.svg" alt="" />
            <span> tehniks.service@mail.ru </span>
          </a>
          <a class="top-header__link formobile" href="tel:+79885231144">
            <img src="@/assets/img/header/call.svg" alt="" />
            <span> + 7 (988) 523-11-44 </span>
          </a>

          <Button class="top-header__button formobile" @click="openPopup">
            Оставить заявку
          </Button>
        </nav>
        <div
          :class="{ 'bottom-header__burger': true, active: burger }"
          @click="toggleBurger"
        >
          <span></span>
        </div>
      </div>
    </div>
  </header>
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
export default class AppHeader extends Vue {
  isScrolled = false;
  handleClick(anchorId: string) {
    this.scrollToAnchor(anchorId);
    this.toggleBurger();
  }
  scrollToAnchor(anchorId: string) {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  burger = false;
  toggleBurger() {
    this.burger = !this.burger;
    if (this.burger) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  background: #fff;
  left: 0;
  width: 100%;
  z-index: 1010;
  transition: all 0.3s ease 0s;
  &.show {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
}
.top-header {
  padding: 10px 0;
  background: #f6f6f6;
  transition: all 0.3s ease 0s;
  .header.show & {
    margin-top: -36px;
  }
  &__container {
    display: flex;
    justify-content: flex-end;
    gap: 26px;
  }
  &__link {
    line-height: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
    & img {
      margin-right: 6px;
      flex: 0 0 16px;
      width: 16px;
    }
    @media (max-width: 991px) {
      justify-content: center;
      text-align: center;
      font-size: 18px;
      margin-bottom: 20px;
      & img {
        margin-right: 8px;
      }
    }
  }
  &__button {
    width: 100%;
    @media (max-width: 991px) {
      max-width: 308px;
      margin: 40px auto 0;
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
}
.formobile {
  display: none;
  @media (max-width: 991px) {
    display: flex;
    text-align: center;
    justify-content: center;
  }
}
.bottom-header {
  padding: 15px 0;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  &__logo {
    flex: 0 0 180px;
    & img {
      width: 100%;
    }
  }
  &__burger {
    display: none;
    @media (max-width: 991px) {
      flex: 0 0 30px;
      z-index: 10;
      width: 30px;
      height: 20px;
      display: block;
      cursor: pointer;
      position: relative;
      &:after,
      &:before {
        content: "";
        position: absolute;
        left: 50%;
        width: 100%;
        transition: all 0.3s ease 0s;
        transform: translate(-50%, 0);
        height: 2px;
        background: #141414;
        border-radius: 10px;
      }
      & span {
        position: absolute;
        left: 50%;
        width: 100%;
        transition: all 0.3s ease 0s;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 2px;
        background: #141414;
        border-radius: 10px;
      }
      &:after {
        top: 0;
      }
      &:before {
        bottom: 0;
      }
      &.active {
        & span {
          transform: translate(-50%, -50%) scale(0);
        }
        &:after {
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:before {
          bottom: auto;
          top: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }
  }
}
.menu {
  &__list {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    gap: 36px;
    row-gap: 10px;
  }
  &__link {
    transition: all 0.3s ease 0s;
    position: relative;
    @media (min-width: 992px) {
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        width: 0;
        height: 1px;
        background: #ffba08;
        transition: all 0.3s ease 0s;
        bottom: -3px;
      }
      &:hover {
        color: #ffba08;
        &:after {
          width: 100%;
          left: 0;
        }
      }
      &.router-link-exact-active {
        color: #ffba08;
        &:after {
          width: 100%;
          left: 0;
        }
      }
    }
  }
  &__logo {
    display: none;
    width: 100%;
    max-width: 264px;
    margin: 0 auto;
    & img {
      width: 100%;
    }
  }
  @media (max-width: 991px) {
    position: absolute;
    left: -100%;
    top: 0%;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transition: all 0.3s ease 0s;
    &.active {
      left: 0;
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }
    padding: 89px 20px 50px;
    gap: 0;
    &__logo {
      display: block;
    }
    &__list {
      display: block;
      margin: 65px 0;
      font-size: 22px;
      & li {
        width: 100vw;
        margin-left: -20px;
        transition: all 0s ease 0s;
        border-bottom: 0.5px solid rgba(46, 50, 51, 0.5);
        &:first-child {
          border-top: 0.5px solid rgba(46, 50, 51, 0.5);
        }
        & a {
          display: block;
          padding: 14px 0;
        }
      }
    }
  }
}
</style>
