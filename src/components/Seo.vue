<template>
  <section class="seo">
    <div class="seo__container">
      <Title>{{ title }}</Title>
      <Subtitle v-html="text"></Subtitle>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";
@Component({
  components: {
    Title,
    Subtitle,
  },
})
export default class Seo extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) text!: string;
}
</script>
