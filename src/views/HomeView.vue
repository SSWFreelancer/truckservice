<template>
  <div class="home">
    <HomeSlider />
    <div v-for="(cardData, index) in cards" :key="index">
      <Card
        :class="index % 2 !== 0 ? 'reverse gray block' : 'block'"
        :name="cardData.name"
        :text="cardData.text"
        :mass="cardData.mass"
        :deep="cardData.deep"
        :capacity="cardData.capacity"
        :cardImage="cardData.cardImage"
      />
    </div>
    <Metall class="block gray" />
    <Repairblock class="block"></Repairblock>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeSlider from "@/components/HomeSlider.vue";
import Card from "@/components/Card.vue";
import Metall from "@/components/Metall.vue";
import Repairblock from "@/components/RepairBlock.vue";
@Component({
  components: {
    HomeSlider,
    Card,
    Metall,
    Repairblock,
  },
})
export default class HomeView extends Vue {
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
    },
  ];
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
