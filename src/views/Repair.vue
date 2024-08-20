<template>
  <div class="innerpage">
    <Breadcrumbs> Ремонт и ТО </Breadcrumbs>
    <Banner :imgsrc="BannerImage" visibleBottom="true"> Ремонт и ТО </Banner>
    <div class="block">
      <RepairBlock :repairLink="false" />
      <Seo title="SEO" :text="text" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Banner from "@/components/Banner.vue";
const BannerImage = require("@/assets/img/main/3.png") as string;
import RepairBlock from "@/components/RepairBlock.vue";
import Seo from "@/components/Seo.vue";
@Component({
  components: {
    Breadcrumbs,
    Banner,
    RepairBlock,
    Seo,
  },
})
export default class Repair extends Vue {
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
