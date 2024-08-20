<template>
  <div class="innerpage">
    <Breadcrumbs> Аренда техники </Breadcrumbs>
    <Banner :imgsrc="BannerImage"> Аренда техники </Banner>
    <div
      v-for="(cardData, index) in cards"
      :key="index"
      :class="index % 2 !== 0 ? 'gray block' : 'block'"
    >
      <Card
        :class="index % 2 !== 0 ? 'reverse' : ''"
        :name="cardData.name"
        :text="cardData.text"
        :mass="cardData.mass"
        :deep="cardData.deep"
        :capacity="cardData.capacity"
        :cardImage="cardData.cardImage"
        :rentLink="cardData.rentLink"
      />
      <Additional :yellowType="index % 2 !== 0 ? false : true" />
      <Seo title="SEO" :text="text" />
      <Gallery :whiteArrow="index % 2 !== 0 ? false : true" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Banner from "@/components/Banner.vue";
const BannerImage = require("@/assets/img/main/1.png") as string;
import Seo from "@/components/Seo.vue";
import Card from "@/components/Card.vue";
import Additional from "@/components/Additional.vue";
import Gallery from "@/components/Gallery.vue";
@Component({
  components: {
    Breadcrumbs,
    Banner,
    Card,
    Additional,
    Gallery,
    Seo,
  },
})
export default class Rent extends Vue {
  BannerImage = BannerImage;
  text = `Мы обладаем необходимыми навыками и опытом для выполнения ремонта самого разного оборудования, включая мотокультиваторы, мотопомпы, насосные станции, бензиновые и дизельные генераторы, бензотримеры, мотокосы, бензопилы, бензорезы и многое другое.
  <br><br>
  Мы понимаем, как важно для вас сохранить в рабочем состоянии технику, которая облегчает уход за домом и садом. Наши специалисты гарантируют качественный ремонт, при котором устраняются не только очевидные неисправности, но и предотвращаются возможные проблемы в будущем.
  <br><br>
  Наш сервис обеспечивает полный цикл ремонта - от диагностики до исправления любых неисправностей и проведения планового обслуживания. Мы работаем со всеми популярными брендами и моделями оборудования для дома и сада, что позволяет нам быстро и эффективно решать любые задачи.
  `;
  cards = [
    {
      name: "Kubota U20",
      text: `Мини-экскаватор Kubota U20 - это компактная и маневренная машина, предназначенная для выполнения различных работ на строительных площадках.
      <br><br>
      Экскаватор имеет вес до 2 тонн и может работать на глубине до 2,5 метров, что позволяет ему легко выполнять различные работы по земляным работам и устройству фундаментов. Он также оснащен различными насадками, такими как ковш, гидромолот и дробилка, что позволяет использовать его для выполнения различных задач.`,
      mass: "2 567",
      deep: "2 500",
      capacity: "0.1",
      cardImage: require("@/assets/img/card/1.png"),
      rentLink: false,
    },
    {
      name: "Kubota U35",
      text: `
        Kubota U35-4 с новой кабиной класса 3 тонны - это лучший в своем классе мини-экскаватор с узким хвостовым отсеком, предлагающий больше места, чем когда-либо прежде.
        <br><br>
        Kubota U35-4 оснащен надежным двигателем Kubota мощностью 24,8 л.с. и сочетает в себе превосходную мощность и исключительную универсальность для выполнения самых разнообразных работ и условий.
      `,
      mass: "3 734",
      deep: "3 140",
      capacity: "0.1",
      cardImage: require("@/assets/img/card/2.png"),
      rentLink: false,
    },
    {
      name: "Грунторез",
      text: `
        Баровая грунторезная машина БГМ-2 предназначена для разработки траншей прямоугольного сечения под кабельные линии связи и электропередач, под трубопроводы различного назначения, а также для прокладки других коммуникаций в талых грунтах до I – III категории.
        <br><br>
        Конструкция баровой машины предусматривает установку барового органа «Урал-33» для резки щели в мерзлых грунтах до V
      `,
      mass: "5 650",
      deep: "1 500",
      capacity: "",
      cardImage: require("@/assets/img/card/3.png"),
      rentLink: false,
    },
  ];
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
