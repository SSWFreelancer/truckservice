<template>
  <div class="innerpage">
    <Breadcrumbs> Металлообработка </Breadcrumbs>
    <Banner :imgsrc="BannerImage"> Металло&shy;обработка </Banner>
    <div class="block">
      <Metall :metallLink="false" />
      <Seo title="SEO" :text="text" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Banner from "@/components/Banner.vue";
import Metall from "@/components/Metall.vue";
import Seo from "@/components/Seo.vue";
const BannerImage = require("@/assets/img/main/2.png") as string;
@Component({
  components: {
    Breadcrumbs,
    Banner,
    Metall,
    Seo,
  },
})
export default class MetalWorking extends Vue {
  BannerImage = BannerImage;
  text = `Мы обладаем необходимыми навыками и опытом для выполнения ремонта самого разного оборудования, включая мотокультиваторы, мотопомпы, насосные станции, бензиновые и дизельные генераторы, бензотримеры, мотокосы, бензопилы, бензорезы и многое другое.
  <br><br>
  Мы понимаем, как важно для вас сохранить в рабочем состоянии технику, которая облегчает уход за домом и садом. Наши специалисты гарантируют качественный ремонт, при котором устраняются не только очевидные неисправности, но и предотвращаются возможные проблемы в будущем.
  <br><br>
  Наш сервис обеспечивает полный цикл ремонта - от диагностики до исправления любых неисправностей и проведения планового обслуживания. Мы работаем со всеми популярными брендами и моделями оборудования для дома и сада, что позволяет нам быстро и эффективно решать любые задачи.
  `;
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
